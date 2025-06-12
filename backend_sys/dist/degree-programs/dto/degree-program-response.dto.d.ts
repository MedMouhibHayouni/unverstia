import { MajorDto } from '../../majors/dto/major.dto';
import { DegreeProgramDto } from './degree-program.dto';
import { SpecialityDto } from '../../specialities/dto/speciality.dto';
export declare class DegreeProgramResponseDto {
    id: number;
    name: string;
    code: string;
    description: string;
    major: MajorDto;
    speciality: SpecialityDto;
    degreePrograms: DegreeProgramDto[];
}
