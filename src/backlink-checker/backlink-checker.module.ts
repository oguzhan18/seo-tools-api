import { Module } from '@nestjs/common';
import { BacklinkCheckerService } from './backlink-checker.service';
import { BacklinkCheckerController } from './backlink-checker.controller';

@Module({
  providers: [BacklinkCheckerService],
  controllers: [BacklinkCheckerController],
})
export class BacklinkCheckerModule {}
