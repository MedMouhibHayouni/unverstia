import { DefensesService } from './defenses.service';
import { CreateDefenseDto } from './dto/create-defense.dto';
import { UpdateDefenseDto } from './dto/update-defense.dto';
export declare class DefensesController {
    private readonly defensesService;
    constructor(defensesService: DefensesService);
    create(createDefenseDto: CreateDefenseDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDefenseDto: UpdateDefenseDto): string;
    remove(id: string): string;
}
