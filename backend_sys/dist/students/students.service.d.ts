import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { User } from '../users/entities/user.entity';
import { DegreeProgram } from '../degree-programs/entities/degree-program.entity';
export declare class StudentsService {
    private readonly repository;
    private readonly userRepository;
    private readonly degreeProgramRepository;
    constructor(repository: Repository<Student>, userRepository: Repository<User>, degreeProgramRepository: Repository<DegreeProgram>);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(userId: number): Promise<Student | null>;
    findByStudentId(studentId: string): Promise<Student | null>;
    update(userId: number, updateStudentDto: UpdateStudentDto): Promise<Student | null>;
    remove(userId: number): Promise<boolean>;
}
