import { Repository } from 'typeorm';
import { PfeDocument } from './entities/pfe-document.entity';
import { SubmitDocumentDto } from './dto/submit-document.dto';
export declare class PfeDocumentService {
    private readonly docRepo;
    constructor(docRepo: Repository<PfeDocument>);
    create(dto: SubmitDocumentDto): Promise<PfeDocument>;
}
