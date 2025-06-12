import { Repository } from 'typeorm';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { Major } from './entities/major.entity';
import { Department } from '../departments/entities/department.entity';
export declare class MajorsService {
    private readonly majorsRepository;
    private readonly departmentRepository;
    constructor(majorsRepository: Repository<Major>, departmentRepository: Repository<Department>);
    create(createMajorDto: CreateMajorDto): Promise<Major | null>;
    findAll(): Promise<Major[]>;
    findOne(id: number): Promise<Major | null>;
    update(id: number, updateMajorDto: UpdateMajorDto): Promise<Major | null>;
    remove(id: number): Promise<boolean>;
}
