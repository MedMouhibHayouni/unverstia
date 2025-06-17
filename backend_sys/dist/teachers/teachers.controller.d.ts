import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeacherResponseDto } from './dto/teacher-response.dto';
export declare class TeachersController {
    private readonly teachersService;
    constructor(teachersService: TeachersService);
    create(createTeacherDto: CreateTeacherDto): Promise<TeacherResponseDto>;
    findAll(): Promise<TeacherResponseDto[]>;
    findOne(id: string): Promise<TeacherResponseDto>;
    update(id: string, updateTeacherDto: UpdateTeacherDto): Promise<TeacherResponseDto>;
    remove(id: string): Promise<void>;
}
