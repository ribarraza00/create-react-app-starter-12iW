import { Injectable } from '@nestjs/common';
import { CreateMediosdepagoDto } from './dto/create-mediosdepago.dto';
import { UpdateMediosdepagoDto } from './dto/update-mediosdepago.dto';

@Injectable()
export class MediosdepagoService {
  create(createMediosdepagoDto: CreateMediosdepagoDto) {
    return 'This action adds a new mediosdepago';
  }

  findAll() {
    return `This action returns all mediosdepago`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mediosdepago`;
  }

  update(id: number, updateMediosdepagoDto: UpdateMediosdepagoDto) {
    return `This action updates a #${id} mediosdepago`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediosdepago`;
  }
}
