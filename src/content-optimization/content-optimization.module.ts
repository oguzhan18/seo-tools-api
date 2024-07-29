import { Module } from '@nestjs/common';
import { ContentOptimizationService } from './content-optimization.service';
import { ContentOptimizationController } from './content-optimization.controller';

@Module({
  providers: [ContentOptimizationService],
  controllers: [ContentOptimizationController]
})
export class ContentOptimizationModule {}
