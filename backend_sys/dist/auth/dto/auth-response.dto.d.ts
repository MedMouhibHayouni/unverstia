import { PositionType } from 'src/enums/PositionType.enum';
export declare class AuthResponseDto {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    role: string;
    access_token: string;
    position?: PositionType;
}
