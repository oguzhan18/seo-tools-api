import { Controller, Get, Query } from '@nestjs/common';
import { SocialMediaIntegrationService } from './social-media-integration.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('social-media-integration')
@Controller('social-media-integration')
export class SocialMediaIntegrationController {
  constructor(
    private readonly socialMediaIntegrationService: SocialMediaIntegrationService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Analyze social media integration of a given website',
  })
  @ApiQuery({
    name: 'url',
    required: true,
    description: 'Website URL to analyze',
  })
  async analyze(@Query('url') url: string): Promise<any> {
    return this.socialMediaIntegrationService.analyze(url);
  }
}
