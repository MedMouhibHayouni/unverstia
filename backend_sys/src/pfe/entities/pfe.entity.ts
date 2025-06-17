import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Student } from '../../students/entities/student.entity';
import { Teacher } from '../../teachers/entities/teacher.entity';
import { PfeStatus } from 'src/enums/pfe-status.enum';
import { PfeDocument } from './pfe-document.entity';
import { PfeEvaluation } from './pfe-evaluation.entity';

@Entity('pfe')
export class Pfe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column({ type: 'enum', enum: PfeStatus, default: PfeStatus.PROPOSED })
  status: PfeStatus;

  @Column({
    type: 'date', // Use date type if you only care about the date portion
    nullable: true,
    transformer: {
      to: (value: Date) =>
        value
          ? new Date(value.getFullYear(), value.getMonth(), value.getDate())
          : null,
      from: (value: Date) => value,
    },
  })
  submission_date: Date;

  @Column({
    type: 'date',
    nullable: true,
    transformer: {
      to: (value: Date) =>
        value
          ? new Date(value.getFullYear(), value.getMonth(), value.getDate())
          : null,
      from: (value: Date) => value,
    },
  })
  defense_date: Date;

  // Relations
  @ManyToOne(() => Student, (student) => student.pfes)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => Teacher, (teacher) => teacher.supervisedPfes)
  @JoinColumn({ name: 'supervisor_id' })
  supervisor: Teacher;

  @OneToMany(() => PfeDocument, (document) => document.pfe)
  documents: PfeDocument[];

  @OneToMany(() => PfeEvaluation, (evaluation) => evaluation.pfe)
  evaluations: PfeEvaluation[];
}
