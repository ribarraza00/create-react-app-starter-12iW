import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateClienteDto {
    @IsString()
    @MinLength(1)
    Nombre: string;

    @IsString()
    @MinLength(1)
    Apellido: string;

    @IsString()
    @MinLength(1)
    @IsEmail()
    Email: string;

    @IsString()
    @MinLength(1)
    Telefono: string;
}
