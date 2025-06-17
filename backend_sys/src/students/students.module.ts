import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { Student } from './entities/student.entity';
import { User } from '../users/entities/user.entity';
import { DegreeProgram } from '../degree-programs/entities/degree-program.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, User, DegreeProgram])],
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [StudentsService, TypeOrmModule], // If you need to use the service in other modules
})
export class StudentsModule {}
