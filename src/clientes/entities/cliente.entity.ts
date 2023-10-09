import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes') 
export class Cliente {
    @PrimaryGeneratedColumn('increment')
    clienteID: number;
    
    @Column('varchar', {})
    Nombre: string;

    @Column('varchar', {})
    Apellido: string;

    @Column('varchar', {})
    Email: string;

    @Column('varchar', {})
    Telefono: string;


    


}
