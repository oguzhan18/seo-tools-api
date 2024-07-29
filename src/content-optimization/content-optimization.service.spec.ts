import { Test, TestingModule } from '@nestjs/testing';
import { ContentOptimizationService } from './content-optimization.service';

describe('ContentOptimizationService', () => {
  let service: ContentOptimizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentOptimizationService],
    }).compile();

    service = module.get<ContentOptimizationService>(ContentOptimizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
