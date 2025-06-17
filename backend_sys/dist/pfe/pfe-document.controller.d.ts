import { SubmitDocumentDto } from './dto/submit-document.dto';
import { PfeDocumentService } from './pfe-document.service';
export declare class PfeDocumentController {
    private readonly docService;
    constructor(docService: PfeDocumentService);
    create(dto: SubmitDocumentDto): Promise<import("./entities/pfe-document.entity").PfeDocument>;
}
