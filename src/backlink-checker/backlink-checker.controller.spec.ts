import { Test, TestingModule } from '@nestjs/testing';
import { BacklinkCheckerController } from './backlink-checker.controller';

describe('BacklinkCheckerController', () => {
  let controller: BacklinkCheckerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BacklinkCheckerController],
    }).compile();

    controller = module.get<BacklinkCheckerController>(BacklinkCheckerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
