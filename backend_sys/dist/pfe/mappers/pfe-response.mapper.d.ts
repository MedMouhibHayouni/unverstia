import { Pfe } from '../entities/pfe.entity';
import { PfeResponseDto } from '../dto/pfe-response.dto';
export declare class PfeResponseMapper {
    static toDto(pfe: Pfe): PfeResponseDto;
    private static formatDate;
}
