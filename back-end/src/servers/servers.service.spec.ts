import { Test, TestingModule } from '@nestjs/testing';
import { ServersService } from './servers.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { of, throwError } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';
import { Server } from './entities/server.entity';
import { HttpException } from '@nestjs/common';

const mockServers: Server[] = [
  { id: 1, url: 'http://server1.com', priority: 1 },
  { id: 2, url: 'http://server2.com', priority: 2 },
  { id: 3, url: 'http://server3.com', priority: 2 },
];

describe('ServersService', () => {
  let service: ServersService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ServersService],
    }).compile();

    service = module.get<ServersService>(ServersService);
    httpService = module.get<HttpService>(HttpService);

    jest.spyOn(service, 'getServers').mockResolvedValueOnce(mockServers);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the server with the lowest priority that is online', async () => {
    jest.spyOn(httpService, 'get').mockImplementation((url) => {
      // Mock server id = 1 is offline
      if (url === mockServers[0].url) {
        return throwError(() => new AxiosError('Not Found', '404'));
      }
      const response: AxiosResponse = {
        data: {},
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
        },
      };
      return of(response);
    });

    // Call the findServer method
    const result = await service.findServer();

    // return server with id = 2
    expect(result).toEqual(mockServers[1]);
  });

  it('should throw an exception if no servers are online', async () => {
    jest.spyOn(httpService, 'get').mockImplementation((url) => {
      // Mock all servers are offline
      if (mockServers.map((server) => server.url).includes(url)) {
        return throwError(() => new AxiosError('Not Found', '404'));
      }
      const response: AxiosResponse = {
        data: {},
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
        },
      };
      return of(response);
    });

    // Call the findServer method
    await expect(service.findServer()).rejects.toThrow(
      new HttpException('No servers are online', 404),
    );
  });
});
