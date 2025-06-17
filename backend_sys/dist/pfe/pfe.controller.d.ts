import { PfeService } from './pfe.service';
import { PfeResponseDto } from './dto/pfe-response.dto';
import { CreatePfeDto } from './dto/create-pfe.dto';
import { UpdatePfeDto } from './dto/update-pfe.dto';
export declare class PfeController {
    private readonly pfeService;
    constructor(pfeService: PfeService);
    create(dto: CreatePfeDto): Promise<PfeResponseDto>;
    findAll(): Promise<PfeResponseDto[]>;
    findOne(id: number): Promise<PfeResponseDto>;
    update(id: number, dto: UpdatePfeDto): Promise<PfeResponseDto>;
    delete(id: number): Promise<void>;
    approve(id: number): Promise<PfeResponseDto>;
    reject(id: number): Promise<PfeResponseDto>;
    getBySupervisor(id: number): Promise<PfeResponseDto[]>;
}
