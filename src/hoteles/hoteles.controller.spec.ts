import { Test, TestingModule } from '@nestjs/testing';
import { HotelesController } from './hoteles.controller';
import { HotelesService } from './hoteles.service';

describe('HotelesController', () => {
  let controller: HotelesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelesController],
      providers: [HotelesService],
    }).compile();

    controller = module.get<HotelesController>(HotelesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
