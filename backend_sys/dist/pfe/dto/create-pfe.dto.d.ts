import { PfeStatus } from 'src/enums/pfe-status.enum';
export declare class CreatePfeDto {
    title: string;
    description?: string;
    student_id: number;
    supervisor_id?: number;
    submission_date?: Date;
    defense_date?: Date;
    status?: PfeStatus;
}
