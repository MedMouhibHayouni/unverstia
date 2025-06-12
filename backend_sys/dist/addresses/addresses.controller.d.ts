import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Addresses } from './entities/address.entity';
export declare class AddressesController {
    private readonly addressService;
    constructor(addressService: AddressesService);
    create(createAddressDto: CreateAddressDto): Promise<Addresses | null>;
    findAll(): Promise<Addresses[]>;
    findOne(id: string): Promise<Addresses>;
    update(id: string, updateAddressDto: UpdateAddressDto): Promise<Addresses>;
    partialUpdate(id: string, updateAddressDto: UpdateAddressDto): Promise<Addresses>;
    remove(id: string): Promise<void>;
}
