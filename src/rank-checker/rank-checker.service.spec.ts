import { Test, TestingModule } from '@nestjs/testing';
import { RankCheckerService } from './rank-checker.service';

describe('RankCheckerService', () => {
  let service: RankCheckerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RankCheckerService],
    }).compile();

    service = module.get<RankCheckerService>(RankCheckerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
