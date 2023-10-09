import { Test, TestingModule } from '@nestjs/testing';
import { MediosdepagoService } from './mediosdepago.service';

describe('MediosdepagoService', () => {
  let service: MediosdepagoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediosdepagoService],
    }).compile();

    service = module.get<MediosdepagoService>(MediosdepagoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
