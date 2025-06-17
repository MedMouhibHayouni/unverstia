import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Pfe } from './pfe.entity';
import { DocumentType } from '../../enums/document-type.enum';

@Entity('pfe_documents')
export class PfeDocument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  file_url: string;

  @Column({ type: 'enum', enum: DocumentType })
  type: DocumentType;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  uploaded_at: Date;

  @ManyToOne(() => Pfe, (pfe) => pfe.documents)
  @JoinColumn({ name: 'pfe_id' })
  pfe: Pfe;
}
