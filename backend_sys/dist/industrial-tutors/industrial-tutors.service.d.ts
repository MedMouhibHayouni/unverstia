import { CreateIndustrialTutorDto } from './dto/create-industrial-tutor.dto';
import { UpdateIndustrialTutorDto } from './dto/update-industrial-tutor.dto';
export declare class IndustrialTutorsService {
    create(createIndustrialTutorDto: CreateIndustrialTutorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateIndustrialTutorDto: UpdateIndustrialTutorDto): string;
    remove(id: number): string;
}
