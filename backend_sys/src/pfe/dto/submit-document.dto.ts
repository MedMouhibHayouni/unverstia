import { IsEnum, IsNumber, IsString } from 'class-validator';
import { DocumentType } from '../../enums/document-type.enum';

export class SubmitDocumentDto {
  @IsNumber()
  pfe_id: number;

  @IsEnum(DocumentType)
  type: DocumentType;

  @IsString()
  file_url: string;
}
