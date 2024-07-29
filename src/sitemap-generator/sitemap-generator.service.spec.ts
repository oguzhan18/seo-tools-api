import { Test, TestingModule } from '@nestjs/testing';
import { SitemapGeneratorService } from './sitemap-generator.service';

describe('SitemapGeneratorService', () => {
  let service: SitemapGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SitemapGeneratorService],
    }).compile();

    service = module.get<SitemapGeneratorService>(SitemapGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
