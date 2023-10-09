import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HotelesService } from './hoteles.service';
import { CreateHoteleDto } from './dto/create-hotele.dto';
import { UpdateHoteleDto } from './dto/update-hotele.dto';

@Controller('hoteles')
export class HotelesController {
  constructor(private readonly hotelesService: HotelesService) {}

  @Post()
  create(@Body() createHoteleDto: CreateHoteleDto) {
    return this.hotelesService.create(createHoteleDto);
  }

  @Get()
  findAll() {
    return this.hotelesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHoteleDto: UpdateHoteleDto) {
    return this.hotelesService.update(+id, updateHoteleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelesService.remove(+id);
  }
}
