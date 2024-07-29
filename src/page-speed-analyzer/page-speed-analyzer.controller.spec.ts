import { Test, TestingModule } from '@nestjs/testing';
import { PageSpeedAnalyzerController } from './page-speed-analyzer.controller';

describe('PageSpeedAnalyzerController', () => {
  let controller: PageSpeedAnalyzerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PageSpeedAnalyzerController],
    }).compile();

    controller = module.get<PageSpeedAnalyzerController>(PageSpeedAnalyzerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
