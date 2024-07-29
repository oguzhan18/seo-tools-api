import { Module } from '@nestjs/common';
import { SeoAuditService } from './seo-audit.service';
import { SeoAuditController } from './seo-audit.controller';

@Module({
  providers: [SeoAuditService],
  controllers: [SeoAuditController]
})
export class SeoAuditModule {}
