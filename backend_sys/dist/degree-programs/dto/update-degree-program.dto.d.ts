import { DegreeProgramType } from 'src/enums/DegreeProgramType.enum';
export declare class UpdateDegreeProgramDto {
    name: string;
    code: string;
    description: string;
    level: DegreeProgramType;
    duration: number;
}
