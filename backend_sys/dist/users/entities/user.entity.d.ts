import { Addresses } from '../../addresses/entities/address.entity';
import { RoleType } from '../../enums/RoleType.enum';
export declare class User {
    id: number;
    profile_picture: string;
    first_name: string;
    last_name: string;
    cin: string;
    email: string;
    phone: string;
    password_hash: string;
    role: RoleType;
    created_at: Date;
    address: Addresses;
    reset_token: string;
    reset_token_expiry: Date;
    last_login: Date;
    is_active: boolean;
}
