import { Addresses } from '../../addresses/entities/address.entity';
import { DegreeProgram } from '../../degree-programs/entities/degree-program.entity';
export declare class AcademicInstitution {
    id: number;
    name: string;
    university: string;
    phone: number;
    fax?: number;
    email: string;
    director: string;
    logo_url?: string;
    address: Addresses | null;
    degreePrograms: DegreeProgram[];
}
