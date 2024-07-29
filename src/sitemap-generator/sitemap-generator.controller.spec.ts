import { Test, TestingModule } from '@nestjs/testing';
import { SitemapGeneratorController } from './sitemap-generator.controller';

describe('SitemapGeneratorController', () => {
  let controller: SitemapGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SitemapGeneratorController],
    }).compile();

    controller = module.get<SitemapGeneratorController>(SitemapGeneratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
