import { Controller, Get, Query, Header } from '@nestjs/common';
import { SitemapGeneratorService } from './sitemap-generator.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('sitemap-generator')
@Controller('sitemap-generator')
export class SitemapGeneratorController {
  constructor(private readonly sitemapGeneratorService: SitemapGeneratorService) {}

  @Get()
  @Header('Content-Type', 'application/xml')
  @ApiOperation({ summary: 'Generate an XML sitemap for a given website' })
  @ApiQuery({ name: 'url', required: true, description: 'Website URL to generate sitemap for' })
  async generateSitemap(@Query('url') url: string): Promise<string> {
    return this.sitemapGeneratorService.generateSitemap(url);
  }
}
