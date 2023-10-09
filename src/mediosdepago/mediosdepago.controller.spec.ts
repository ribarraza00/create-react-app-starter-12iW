import { Test, TestingModule } from '@nestjs/testing';
import { MediosdepagoController } from './mediosdepago.controller';
import { MediosdepagoService } from './mediosdepago.service';

describe('MediosdepagoController', () => {
  let controller: MediosdepagoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediosdepagoController],
      providers: [MediosdepagoService],
    }).compile();

    controller = module.get<MediosdepagoController>(MediosdepagoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
