import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Major } from '../../majors/entities/major.entity';
import { AcademicInstitution } from '../../academic-institution/entities/academic-institution.entity';
@Entity('department')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 10, unique: true })
  code: string;

  @ManyToOne(() => AcademicInstitution, { nullable: true })
  academicInstitution: AcademicInstitution;

  @OneToMany(() => Major, (major) => major.department)
  majors: Major[];
}
