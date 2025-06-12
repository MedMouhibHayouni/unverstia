import { Repository } from 'typeorm';
import { Speciality } from './entities/speciality.entity';
import { Major } from '../majors/entities/major.entity';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
export declare class SpecialitiesService {
    private readonly specialityRepository;
    private readonly majorRepository;
    constructor(specialityRepository: Repository<Speciality>, majorRepository: Repository<Major>);
    create(createSpecialityDto: CreateSpecialityDto): Promise<Speciality>;
    findAll(): Promise<Speciality[]>;
    findOne(id: number): Promise<Speciality | null>;
    update(id: number, updateSpecialityDto: UpdateSpecialityDto): Promise<Speciality | null>;
    remove(id: number): Promise<boolean>;
}
