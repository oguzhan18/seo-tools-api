import { Test, TestingModule } from '@nestjs/testing';
import { ContentOptimizationController } from './content-optimization.controller';

describe('ContentOptimizationController', () => {
  let controller: ContentOptimizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentOptimizationController],
    }).compile();

    controller = module.get<ContentOptimizationController>(ContentOptimizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
