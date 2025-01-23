import { Test, TestingModule } from '@nestjs/testing';
import { ServersService } from './servers.service';
import { HttpModule } from '@nestjs/axios';

describe('ServersService', () => {
  let service: ServersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ServersService],
    }).compile();

    service = module.get<ServersService>(ServersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
