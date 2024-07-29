import { Controller, Get, Query } from '@nestjs/common';
import { CompetitorAnalysisService } from './competitor-analysis.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('competitor-analysis')
@Controller('competitor-analysis')
export class CompetitorAnalysisController {
  constructor(
    private readonly competitorAnalysisService: CompetitorAnalysisService,
  ) {}

  @Get()
  @ApiOperation({
    summary: "Analyze and compare competitor websites' SEO performance",
  })
  @ApiQuery({
    name: 'urls',
    required: true,
    description: 'Comma-separated list of competitor URLs to analyze',
  })
  @ApiQuery({
    name: 'keyword',
    required: true,
    description: 'Keyword to check the rank against',
  })
  async analyze(
    @Query('urls') urls: string,
    @Query('keyword') keyword: string,
  ): Promise<any> {
    const urlList = urls.split(',');
    return this.competitorAnalysisService.analyze(urlList, keyword);
  }
}
