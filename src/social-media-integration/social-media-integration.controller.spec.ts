import { Test, TestingModule } from '@nestjs/testing';
import { SocialMediaIntegrationController } from './social-media-integration.controller';

describe('SocialMediaIntegrationController', () => {
  let controller: SocialMediaIntegrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocialMediaIntegrationController],
    }).compile();

    controller = module.get<SocialMediaIntegrationController>(SocialMediaIntegrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
