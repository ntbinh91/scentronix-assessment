import { HttpException, Injectable } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Server } from './entities/server.entity';
import { SERVER_LIST_ENDPOINT } from './constants/servers.constant';

@Injectable()
export class ServersService {
  constructor(private readonly httpService: HttpService) {}

  async getServers(): Promise<Server[]> {
    const serversListResponse = await lastValueFrom(
      this.httpService.get<{ servers: Server[] }>(SERVER_LIST_ENDPOINT).pipe(
        map((response) => response.data),
        catchError(() => {
          throw new HttpException('Failed to fetch servers list', 500);
        }),
      ),
    );
    const { servers } = serversListResponse || {};
    return servers || [];
  }

  async findServer() {
    // Get servers list
    const servers = await this.getServers();

    // Check server status concurrently
    const serverChecks = servers.map(
      (server) =>
        lastValueFrom(
          this.httpService.get<Server[]>(server.url).pipe(
            map((response) => {
              // Server is online if the status code is between 200 and 299
              if (response.status >= 200 && response.status <= 299) {
                return server;
              }
              throw new Error('Server not online');
            }),
            catchError(() => {
              throw new Error('Server not online');
            }),
          ),
        ).catch(() => null), // If the request fails, return null
    );
    const serverCheckResults = await Promise.all(serverChecks);

    // Filter out the servers that are not online
    const onlineServers = serverCheckResults.filter((server) => !!server);

    if (onlineServers.length === 0) {
      throw new HttpException('No servers are online', 404);
    }

    // Find the server with the lowest priority
    return onlineServers.sort((a, b) => a.priority - b.priority)[0];
  }
}
