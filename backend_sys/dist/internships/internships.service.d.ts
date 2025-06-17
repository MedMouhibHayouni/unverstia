import { CreateInternshipDto } from './dto/create-internship.dto';
import { UpdateInternshipDto } from './dto/update-internship.dto';
export declare class InternshipsService {
    create(createInternshipDto: CreateInternshipDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateInternshipDto: UpdateInternshipDto): string;
    remove(id: number): string;
}
