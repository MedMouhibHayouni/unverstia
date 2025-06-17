import { PositionsService } from './positions.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
export declare class PositionsController {
    private readonly positionsService;
    constructor(positionsService: PositionsService);
    create(createPositionDto: CreatePositionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePositionDto: UpdatePositionDto): string;
    remove(id: string): string;
}
