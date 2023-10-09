import { Injectable } from '@nestjs/common';
import { CreateHoteleDto } from './dto/create-hotele.dto';
import { UpdateHoteleDto } from './dto/update-hotele.dto';

@Injectable()
export class HotelesService {
  create(createHoteleDto: CreateHoteleDto) {
    return 'This action adds a new hotele';
  }

  findAll() {
    return `This action returns all hoteles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hotele`;
  }

  update(id: number, updateHoteleDto: UpdateHoteleDto) {
    return `This action updates a #${id} hotele`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotele`;
  }
}
