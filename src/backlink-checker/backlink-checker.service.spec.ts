import { Test, TestingModule } from '@nestjs/testing';
import { BacklinkCheckerService } from './backlink-checker.service';

describe('BacklinkCheckerService', () => {
  let service: BacklinkCheckerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BacklinkCheckerService],
    }).compile();

    service = module.get<BacklinkCheckerService>(BacklinkCheckerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
