import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ServersModule } from './servers/servers.module';

@Module({
  imports: [ConfigModule.forRoot(), ServersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
