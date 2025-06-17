// src/teachers/dto/teacher-response.dto.ts
import { Expose, Type } from 'class-transformer';
import { PositionType } from '../../enums/PositionType.enum';
import { UserDto } from 'src/users/dto/user.dto';

export class TeacherResponseDto {
  @Expose()
  id: number;

  @Expose()
  user_id: number;

  @Expose()
  position: PositionType;

  @Expose()
  department_id: number | null;

  @Expose()
  @Type(() => UserDto)
  user: UserDto;
}
