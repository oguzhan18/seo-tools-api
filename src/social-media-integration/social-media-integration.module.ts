import { Module } from '@nestjs/common';
import { SocialMediaIntegrationService } from './social-media-integration.service';
import { SocialMediaIntegrationController } from './social-media-integration.controller';

@Module({
  providers: [SocialMediaIntegrationService],
  controllers: [SocialMediaIntegrationController]
})
export class SocialMediaIntegrationModule {}
