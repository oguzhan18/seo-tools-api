import { Test, TestingModule } from '@nestjs/testing';
import { SeoAuditService } from './seo-audit.service';

describe('SeoAuditService', () => {
  let service: SeoAuditService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeoAuditService],
    }).compile();

    service = module.get<SeoAuditService>(SeoAuditService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
