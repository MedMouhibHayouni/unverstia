import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Pfe } from './pfe.entity';
import { Teacher } from '../../teachers/entities/teacher.entity';
import { EvaluationType } from 'src/enums/evaluation-type.enum';

@Entity('pfe_evaluations')
export class PfeEvaluation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: EvaluationType })
  type: EvaluationType;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  score: number;

  @Column('text')
  feedback: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  evaluated_at: Date;

  @ManyToOne(() => Pfe, (pfe) => pfe.evaluations)
  @JoinColumn({ name: 'pfe_id' })
  pfe: Pfe;

  @ManyToOne(() => Teacher)
  @JoinColumn({ name: 'evaluator_id' })
  evaluator: Teacher;
}
