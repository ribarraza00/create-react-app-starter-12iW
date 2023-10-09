import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository:  Repository<Cliente>
  ){}
  async create(createClienteDto: CreateClienteDto) {
    const res = await this.clienteRepository.save(createClienteDto)
    return { ClienteID: res.clienteID, ...res };
  }

  async findAll() {
    const res = await this.clienteRepository.find()
    return res;
  }

  async findOne(id: number) {
    const res = await this.clienteRepository.findOneBy({clienteID: id})
    if(!res) { throw new NotFoundException(`Cliente with id: < ${ id } > not found.`); }
    return res;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    await this.findOne( id )
    await this.clienteRepository.update( id, {

      Nombre: updateClienteDto.Nombre,
      Apellido: updateClienteDto.Apellido,
      Email: updateClienteDto.Email,
      Telefono: updateClienteDto.Telefono,

    } )

    const res = await this.findOne( id )

    return res;
  }

  async remove(id: number) {
    await this.findOne( id )
    await this.clienteRepository.delete( id )
    return { message: 'Cliente removed'};
  }
}
