import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
export declare class DepartmentsService {
    private departmentsRepository;
    constructor(departmentsRepository: Repository<Department>);
    create(createDepartmentDto: CreateDepartmentDto): Promise<Department | null>;
    findAll(): Promise<Department[]>;
    findOne(id: number): Promise<Department | null>;
    update(id: number, updateDepartmentDto: UpdateDepartmentDto): Promise<Department | null>;
    remove(id: number): Promise<boolean>;
}
