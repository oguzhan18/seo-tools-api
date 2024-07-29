import { Test, TestingModule } from '@nestjs/testing';
import { InternalLinkingService } from './internal-linking.service';

describe('InternalLinkingService', () => {
  let service: InternalLinkingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternalLinkingService],
    }).compile();

    service = module.get<InternalLinkingService>(InternalLinkingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
