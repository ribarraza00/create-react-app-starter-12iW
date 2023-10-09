import { PartialType } from '@nestjs/mapped-types';
import { CreateMediosdepagoDto } from './create-mediosdepago.dto';

export class UpdateMediosdepagoDto extends PartialType(CreateMediosdepagoDto) {}
