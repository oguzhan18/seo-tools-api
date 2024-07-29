import { Test, TestingModule } from '@nestjs/testing';
import { CompetitorAnalysisService } from './competitor-analysis.service';

describe('CompetitorAnalysisService', () => {
  let service: CompetitorAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompetitorAnalysisService],
    }).compile();

    service = module.get<CompetitorAnalysisService>(CompetitorAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
