// src/teachers/dto/create-teacher.dto.ts
import { PositionType } from '../../enums/PositionType.enum';

export class CreateTeacherDto {
  user_id: number;
  position: PositionType;
  department_id?: number;
}
