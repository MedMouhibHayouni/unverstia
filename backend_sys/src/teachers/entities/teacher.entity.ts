// src/teachers/entities/teacher.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { PositionType } from '../../enums/PositionType.enum';
import { Pfe } from 'src/pfe/entities/pfe.entity';

@Entity('teachers')
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' }) // user_id in teachers → users.id
  user: User;

  @Column({ type: 'integer', unique: true }) // links to users.id
  user_id: number;

  @Column({
    type: 'enum',
    enum: PositionType,
    default: PositionType.ASSISTANT_PROF,
  })
  position: PositionType;

  @Column({ nullable: true })
  department_id: number;

  @OneToMany(() => Pfe, (pfe) => pfe.supervisor)
  supervisedPfes: Pfe[];
}
