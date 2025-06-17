import { PositionType } from 'src/enums/PositionType.enum';
export declare class UserResponseDto {
    first_name?: string;
    last_name?: string;
    cin?: string;
    email?: string;
    phone?: string;
    password?: string;
    profile_picture?: string;
    address_id?: number;
    is_active?: boolean;
    position?: PositionType;
}
