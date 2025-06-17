import { PfeStatus } from 'src/enums/pfe-status.enum';
export declare class UpdatePfeDto {
    title?: string;
    description?: string;
    status?: PfeStatus;
    defense_date?: Date;
    supervisor_id?: number;
}
