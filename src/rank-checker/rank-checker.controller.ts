import { Controller, Get, Query } from '@nestjs/common';
import { RankCheckerService } from './rank-checker.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('rank-checker')
@Controller('rank-checker')
export class RankCheckerController {
  constructor(private readonly rankCheckerService: RankCheckerService) {}

  @Get()
  @ApiOperation({ summary: 'Check the rank of a given website for a specified keyword' })
  @ApiQuery({ name: 'url', required: true, description: 'Website URL to check the rank for' })
  @ApiQuery({ name: 'keyword', required: true, description: 'Keyword to check the rank against' })
  async getRank(@Query('url') url: string, @Query('keyword') keyword: string): Promise<number> {
    return this.rankCheckerService.checkRank(url, keyword);
  }

  @Get('keywords')
  @ApiOperation({ summary: 'Get keywords associated with a given website' })
  @ApiQuery({ name: 'url', required: true, description: 'Website URL to get keywords for' })
  async getKeywords(@Query('url') url: string): Promise<string[]> {
    return this.rankCheckerService.getKeywords(url);
  }
}
