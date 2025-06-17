import { CreateDefenseDto } from './dto/create-defense.dto';
import { UpdateDefenseDto } from './dto/update-defense.dto';
export declare class DefensesService {
    create(createDefenseDto: CreateDefenseDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDefenseDto: UpdateDefenseDto): string;
    remove(id: number): string;
}
