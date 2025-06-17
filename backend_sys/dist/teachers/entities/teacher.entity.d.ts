import { User } from '../../users/entities/user.entity';
import { PositionType } from '../../enums/PositionType.enum';
import { Pfe } from 'src/pfe/entities/pfe.entity';
export declare class Teacher {
    id: number;
    user: User;
    user_id: number;
    position: PositionType;
    department_id: number;
    supervisedPfes: Pfe[];
}
