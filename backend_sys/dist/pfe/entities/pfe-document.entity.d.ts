import { Pfe } from './pfe.entity';
import { DocumentType } from '../../enums/document-type.enum';
export declare class PfeDocument {
    id: number;
    file_url: string;
    type: DocumentType;
    uploaded_at: Date;
    pfe: Pfe;
}
