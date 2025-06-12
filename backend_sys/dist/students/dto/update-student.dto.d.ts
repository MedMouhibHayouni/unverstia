import { SexType } from '../../enums/SexType.enum';
import { LevelType } from '../../enums/LevelType.enum';
export declare class UpdateStudentDto {
    sex?: SexType;
    student_id?: string;
    degree_id: number;
    level?: LevelType;
}
