import { States } from 'src/enums/States.enums';
export declare class CreateAddressDto {
    address_details: string;
    zip_code: number;
    city?: string;
    state: States;
    additional_details?: string;
}
