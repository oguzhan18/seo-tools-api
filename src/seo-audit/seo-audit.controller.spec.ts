import { Test, TestingModule } from '@nestjs/testing';
import { SeoAuditController } from './seo-audit.controller';

describe('SeoAuditController', () => {
  let controller: SeoAuditController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeoAuditController],
    }).compile();

    controller = module.get<SeoAuditController>(SeoAuditController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
