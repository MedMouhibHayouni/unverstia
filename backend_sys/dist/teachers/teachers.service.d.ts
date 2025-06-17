import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
export declare class TeachersService {
    private readonly repository;
    constructor(repository: Repository<Teacher>);
    create(createTeacherDto: CreateTeacherDto): Promise<Teacher>;
    findAll(): Promise<Teacher[]>;
    findOne(id: number): Promise<Teacher>;
    findOneByUserId(user_id: number): Promise<Teacher | null>;
    update(id: number, updateTeacherDto: UpdateTeacherDto): Promise<Teacher>;
    remove(id: number): Promise<void>;
}
