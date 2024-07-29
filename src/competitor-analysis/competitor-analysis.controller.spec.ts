import { Test, TestingModule } from '@nestjs/testing';
import { CompetitorAnalysisController } from './competitor-analysis.controller';

describe('CompetitorAnalysisController', () => {
  let controller: CompetitorAnalysisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompetitorAnalysisController],
    }).compile();

    controller = module.get<CompetitorAnalysisController>(CompetitorAnalysisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
