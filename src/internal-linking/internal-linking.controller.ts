import { Controller, Get, Query } from '@nestjs/common';
import { InternalLinkingService } from './internal-linking.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('internal-linking')
@Controller('internal-linking')
export class InternalLinkingController {
  constructor(
    private readonly internalLinkingService: InternalLinkingService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Analyze internal linking structure of a given website',
  })
  @ApiQuery({
    name: 'url',
    required: true,
    description: 'Website URL to analyze',
  })
  async analyze(@Query('url') url: string): Promise<any> {
    return this.internalLinkingService.analyze(url);
  }
}
