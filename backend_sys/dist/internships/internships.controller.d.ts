import { InternshipsService } from './internships.service';
import { CreateInternshipDto } from './dto/create-internship.dto';
import { UpdateInternshipDto } from './dto/update-internship.dto';
export declare class InternshipsController {
    private readonly internshipsService;
    constructor(internshipsService: InternshipsService);
    create(createInternshipDto: CreateInternshipDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateInternshipDto: UpdateInternshipDto): string;
    remove(id: string): string;
}
