import { Module } from '@nestjs/common';
import { SitemapGeneratorService } from './sitemap-generator.service';
import { SitemapGeneratorController } from './sitemap-generator.controller';

@Module({
  providers: [SitemapGeneratorService],
  controllers: [SitemapGeneratorController]
})
export class SitemapGeneratorModule {}
