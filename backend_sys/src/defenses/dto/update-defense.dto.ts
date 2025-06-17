import { PartialType } from '@nestjs/swagger';
import { CreateDefenseDto } from './create-defense.dto';

export class UpdateDefenseDto extends PartialType(CreateDefenseDto) {}
