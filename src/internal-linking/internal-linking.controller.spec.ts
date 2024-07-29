import { Test, TestingModule } from '@nestjs/testing';
import { InternalLinkingController } from './internal-linking.controller';

describe('InternalLinkingController', () => {
  let controller: InternalLinkingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InternalLinkingController],
    }).compile();

    controller = module.get<InternalLinkingController>(InternalLinkingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
