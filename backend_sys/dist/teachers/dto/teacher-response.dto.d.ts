import { PositionType } from '../../enums/PositionType.enum';
import { UserDto } from 'src/users/dto/user.dto';
export declare class TeacherResponseDto {
    id: number;
    user_id: number;
    position: PositionType;
    department_id: number | null;
    user: UserDto;
}
