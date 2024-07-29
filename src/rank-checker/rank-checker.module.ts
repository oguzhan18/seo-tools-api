import { Module } from '@nestjs/common';
import { RankCheckerService } from './rank-checker.service';
import { RankCheckerController } from './rank-checker.controller';

@Module({
  providers: [RankCheckerService],
  controllers: [RankCheckerController],
})
export class RankCheckerModule {}
