import { Controller, Get, Query } from '@nestjs/common';
import { BacklinkCheckerService } from './backlink-checker.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('backlink-checker')
@Controller('backlink-checker')
export class BacklinkCheckerController {
  constructor(public readonly backlinkCheckerService: BacklinkCheckerService) {}

  @Get()
  @ApiOperation({ summary: 'Check backlinks of a given website' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: 'Website URL to check for backlinks',
  })
  async getBacklinks(@Query('url') url: string): Promise<string[]> {
    return this.backlinkCheckerService.checkBacklinks(url);
  }
}
