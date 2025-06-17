import { RoleType } from '../../enums/RoleType.enum';
import { PositionType } from '../../enums/PositionType.enum';
export declare class RegisterDto {
    first_name: string;
    last_name: string;
    cin: string;
    email: string;
    phone: string;
    password: string;
    role: RoleType;
    profile_picture?: string;
    address_id?: number;
    is_active?: boolean;
    position?: PositionType;
}
