import { Module } from '@nestjs/common';
import { InternalLinkingService } from './internal-linking.service';
import { InternalLinkingController } from './internal-linking.controller';

@Module({
  providers: [InternalLinkingService],
  controllers: [InternalLinkingController]
})
export class InternalLinkingModule {}
