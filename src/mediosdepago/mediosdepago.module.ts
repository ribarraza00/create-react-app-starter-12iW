import { Module } from '@nestjs/common';
import { MediosdepagoService } from './mediosdepago.service';
import { MediosdepagoController } from './mediosdepago.controller';

@Module({
  controllers: [MediosdepagoController],
  providers: [MediosdepagoService],
})
export class MediosdepagoModule {}
