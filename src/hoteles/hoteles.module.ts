import { Module } from '@nestjs/common';
import { HotelesService } from './hoteles.service';
import { HotelesController } from './hoteles.controller';

@Module({
  controllers: [HotelesController],
  providers: [HotelesService],
})
export class HotelesModule {}
