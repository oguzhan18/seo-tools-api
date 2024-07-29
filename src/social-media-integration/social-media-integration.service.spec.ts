import { Test, TestingModule } from '@nestjs/testing';
import { SocialMediaIntegrationService } from './social-media-integration.service';

describe('SocialMediaIntegrationService', () => {
  let service: SocialMediaIntegrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialMediaIntegrationService],
    }).compile();

    service = module.get<SocialMediaIntegrationService>(SocialMediaIntegrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
