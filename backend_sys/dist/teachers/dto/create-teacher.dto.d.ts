import { PositionType } from '../../enums/PositionType.enum';
export declare class CreateTeacherDto {
    user_id: number;
    position: PositionType;
    department_id?: number;
}
