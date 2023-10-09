import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MediosdepagoService } from './mediosdepago.service';
import { CreateMediosdepagoDto } from './dto/create-mediosdepago.dto';
import { UpdateMediosdepagoDto } from './dto/update-mediosdepago.dto';

@Controller('mediosdepago')
export class MediosdepagoController {
  constructor(private readonly mediosdepagoService: MediosdepagoService) {}

  @Post()
  create(@Body() createMediosdepagoDto: CreateMediosdepagoDto) {
    return this.mediosdepagoService.create(createMediosdepagoDto);
  }

  @Get()
  findAll() {
    return this.mediosdepagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediosdepagoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMediosdepagoDto: UpdateMediosdepagoDto) {
    return this.mediosdepagoService.update(+id, updateMediosdepagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediosdepagoService.remove(+id);
  }
}
