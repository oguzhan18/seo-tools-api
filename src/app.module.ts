import { Module } from '@nestjs/common';
import { BacklinkCheckerModule } from './backlink-checker/backlink-checker.module';
import { RankCheckerModule } from './rank-checker/rank-checker.module';
import { SeoAuditModule } from './seo-audit/seo-audit.module';
import { SitemapGeneratorModule } from './sitemap-generator/sitemap-generator.module';
import { CompetitorAnalysisModule } from './competitor-analysis/competitor-analysis.module';
import { PageSpeedAnalyzerModule } from './page-speed-analyzer/page-speed-analyzer.module';
import { ContentOptimizationModule } from './content-optimization/content-optimization.module';
import { InternalLinkingModule } from './internal-linking/internal-linking.module';
import { SocialMediaIntegrationModule } from './social-media-integration/social-media-integration.module';

@Module({
  imports: [
    BacklinkCheckerModule,
    RankCheckerModule,
    SeoAuditModule,
    SitemapGeneratorModule,
    CompetitorAnalysisModule,
    PageSpeedAnalyzerModule,
    ContentOptimizationModule,
    InternalLinkingModule,
    SocialMediaIntegrationModule,
  ],
})
export class AppModule {}
