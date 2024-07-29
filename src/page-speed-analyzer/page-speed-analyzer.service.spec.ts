import { Test, TestingModule } from '@nestjs/testing';
import { PageSpeedAnalyzerService } from './page-speed-analyzer.service';

describe('PageSpeedAnalyzerService', () => {
  let service: PageSpeedAnalyzerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PageSpeedAnalyzerService],
    }).compile();

    service = module.get<PageSpeedAnalyzerService>(PageSpeedAnalyzerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
