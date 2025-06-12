import { SpecialitiesService } from './specialities.service';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { Speciality } from './entities/speciality.entity';
import { SpecialityResponseDto } from './dto/speciality-response.dto';
export declare class SpecialitiesController {
    private readonly specialitiesService;
    constructor(specialitiesService: SpecialitiesService);
    create(createSpecialityDto: CreateSpecialityDto): Promise<Speciality | null>;
    findAll(): Promise<SpecialityResponseDto[]>;
    findOne(id: string): Promise<SpecialityResponseDto | null>;
    update(id: string, updateSpecialityDto: UpdateSpecialityDto): Promise<Speciality | null>;
    remove(id: string): Promise<void>;
}
