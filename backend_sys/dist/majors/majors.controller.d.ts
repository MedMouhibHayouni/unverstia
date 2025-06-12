import { MajorsService } from './majors.service';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { Major } from './entities/major.entity';
import { MajorResponseDto } from './dto/major-response.dto';
export declare class MajorsController {
    private readonly majorsService;
    constructor(majorsService: MajorsService);
    create(createMajorDto: CreateMajorDto): Promise<Major | null>;
    findAll(): Promise<MajorResponseDto[]>;
    findOne(id: string): Promise<MajorResponseDto | null>;
    update(id: string, updateMajorDto: UpdateMajorDto): Promise<Major>;
    remove(id: string): Promise<void>;
}
