import { Test, TestingModule } from '@nestjs/testing';
import { RankCheckerController } from './rank-checker.controller';

describe('RankCheckerController', () => {
  let controller: RankCheckerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RankCheckerController],
    }).compile();

    controller = module.get<RankCheckerController>(RankCheckerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
