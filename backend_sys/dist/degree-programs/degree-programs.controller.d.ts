import { DegreeProgramsService } from './degree-programs.service';
import { CreateDegreeProgramDto } from './dto/create-degree-program.dto';
import { UpdateDegreeProgramDto } from './dto/update-degree-program.dto';
import { DegreeProgram } from './entities/degree-program.entity';
import { DegreeProgramResponseDto } from './dto/degree-program-response.dto';
export declare class DegreeProgramsController {
    private readonly degreeProgramsService;
    constructor(degreeProgramsService: DegreeProgramsService);
    create(createDegreeProgramDto: CreateDegreeProgramDto): Promise<DegreeProgram | null>;
    findAll(): Promise<DegreeProgramResponseDto[]>;
    findOne(id: string): Promise<DegreeProgramResponseDto | null>;
    update(id: string, updateDegreeProgramDto: UpdateDegreeProgramDto): Promise<DegreeProgram | null>;
    remove(id: string): Promise<boolean>;
}
