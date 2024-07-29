import { Controller, Get, Query } from '@nestjs/common';
import { SeoAuditService } from './seo-audit.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('seo-audit')
@Controller('seo-audit')
export class SeoAuditController {
  constructor(private readonly seoAuditService: SeoAuditService) {}

  @Get()
  @ApiOperation({ summary: 'Perform an SEO audit on a given website' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: 'Website URL to audit',
  })
  async audit(@Query('url') url: string): Promise<any> {
    return this.seoAuditService.audit(url);
  }
}
