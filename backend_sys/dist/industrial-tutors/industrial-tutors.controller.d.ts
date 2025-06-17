import { IndustrialTutorsService } from './industrial-tutors.service';
import { CreateIndustrialTutorDto } from './dto/create-industrial-tutor.dto';
import { UpdateIndustrialTutorDto } from './dto/update-industrial-tutor.dto';
export declare class IndustrialTutorsController {
    private readonly industrialTutorsService;
    constructor(industrialTutorsService: IndustrialTutorsService);
    create(createIndustrialTutorDto: CreateIndustrialTutorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateIndustrialTutorDto: UpdateIndustrialTutorDto): string;
    remove(id: string): string;
}
