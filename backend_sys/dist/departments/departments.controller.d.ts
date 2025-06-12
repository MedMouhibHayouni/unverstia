import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(createDepartmentDto: CreateDepartmentDto): Promise<Department | null>;
    findAll(): Promise<Department[]>;
    findOne(id: string): Promise<Department>;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<Department | null>;
    remove(id: string): Promise<void>;
}
