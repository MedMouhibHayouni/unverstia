import { PfeResponseDto } from '../dto/pfe-response.dto';
import { Pfe } from '../entities/pfe.entity';
export declare class PfeMapper {
    static toDto(pfe: Pfe): PfeResponseDto;
    private static formatDate;
}
