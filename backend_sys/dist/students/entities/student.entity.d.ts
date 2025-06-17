import { User } from '../../users/entities/user.entity';
import { SexType } from '../../enums/SexType.enum';
import { LevelType } from '../../enums/LevelType.enum';
import { DegreeProgram } from '../../degree-programs/entities/degree-program.entity';
import { Pfe } from 'src/pfe/entities/pfe.entity';
export declare class Student {
    user_id: number;
    user: User;
    sex: SexType;
    student_id: string;
    degree: DegreeProgram;
    level: LevelType;
    pfes: Pfe[];
}
