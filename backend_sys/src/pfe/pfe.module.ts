import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pfe } from './entities/pfe.entity';
import { PfeDocument } from './entities/pfe-document.entity';
import { PfeEvaluation } from './entities/pfe-evaluation.entity';

import { StudentsModule } from '../students/students.module';
import { TeachersModule } from '../teachers/teachers.module';
import { PfeController } from './pfe.controller';
import { PfeEvaluationController } from './pfe-evaluation.controller';
import { PfeService } from './pfe.service';
import { PfeEvaluationService } from './pfe-evaluation.service';
import { PfeDocumentService } from './pfe-document.service';
import { PfeDocumentController } from './pfe-document.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pfe, PfeDocument, PfeEvaluation]),
    StudentsModule,
    TeachersModule,
  ],
  controllers: [PfeController, PfeEvaluationController, PfeDocumentController],
  providers: [PfeService, PfeEvaluationService, PfeDocumentService],
  exports: [PfeService],
})
export class PfeModule {}
