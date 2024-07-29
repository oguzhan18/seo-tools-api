import { Module } from '@nestjs/common';
import { CompetitorAnalysisService } from './competitor-analysis.service';
import { CompetitorAnalysisController } from './competitor-analysis.controller';

@Module({
  providers: [CompetitorAnalysisService],
  controllers: [CompetitorAnalysisController]
})
export class CompetitorAnalysisModule {}
