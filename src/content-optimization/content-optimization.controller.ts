import { Controller, Get, Query } from '@nestjs/common';
import { ContentOptimizationService } from './content-optimization.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('content-optimization')
@Controller('content-optimization')
export class ContentOptimizationController {
  constructor(
    private readonly contentOptimizationService: ContentOptimizationService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Analyze and optimize content for a given website' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: 'Website URL to analyze',
  })
  async optimize(@Query('url') url: string): Promise<any> {
    return this.contentOptimizationService.optimize(url);
  }
}
