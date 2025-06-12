import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Addresses } from '../addresses/entities/address.entity';
export declare class UsersService {
    private readonly repository;
    private readonly addressRepository;
    constructor(repository: Repository<User>, addressRepository: Repository<Addresses>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByCin(cin: string): Promise<User | null>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User | null>;
    remove(id: number): Promise<boolean>;
    validateUserCredentials(email: string, password: string): Promise<User | null>;
    updateLastLogin(id: number): Promise<void>;
    generateResetToken(email: string): Promise<string | null>;
    resetPassword(token: string, newPassword: string): Promise<boolean>;
}
