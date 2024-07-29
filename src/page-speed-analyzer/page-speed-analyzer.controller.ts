import { Controller, Get, Query } from '@nestjs/common';
import { PageSpeedAnalyzerService } from './page-speed-analyzer.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('page-speed-analyzer')
@Controller('page-speed-analyzer')
export class PageSpeedAnalyzerController {
  constructor(
    private readonly pageSpeedAnalyzerService: PageSpeedAnalyzerService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Analyze the page speed of a given website' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: 'Website URL to analyze',
  })
  async analyze(@Query('url') url: string): Promise<any> {
    return this.pageSpeedAnalyzerService.analyze(url);
  }
}
