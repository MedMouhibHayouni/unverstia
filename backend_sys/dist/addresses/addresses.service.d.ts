import { Repository } from 'typeorm';
import { Addresses } from './entities/address.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressesService {
    private readonly addressRepository;
    constructor(addressRepository: Repository<Addresses>);
    create(createAddressDto: CreateAddressDto): Promise<Addresses | null>;
    findAll(): Promise<Addresses[]>;
    findOne(id: number): Promise<Addresses | null>;
    update(id: number, updateAddressDto: UpdateAddressDto): Promise<Addresses>;
    remove(id: number): Promise<boolean>;
}
