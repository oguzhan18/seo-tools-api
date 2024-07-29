import { Module } from '@nestjs/common';
import { PageSpeedAnalyzerService } from './page-speed-analyzer.service';
import { PageSpeedAnalyzerController } from './page-speed-analyzer.controller';

@Module({
  providers: [PageSpeedAnalyzerService],
  controllers: [PageSpeedAnalyzerController]
})
export class PageSpeedAnalyzerModule {}
