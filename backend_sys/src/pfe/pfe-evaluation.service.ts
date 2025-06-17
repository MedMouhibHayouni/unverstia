import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EvaluatePfeDto } from './dto/evaluate-pfe.dto';
import { PfeEvaluation } from './entities/pfe-evaluation.entity';

@Injectable()
export class PfeEvaluationService {
  constructor(
    @InjectRepository(PfeEvaluation)
    private evalRepo: Repository<PfeEvaluation>,
  ) {}

  async evaluate(dto: EvaluatePfeDto): Promise<PfeEvaluation> {
    const evaluation = this.evalRepo.create(dto);
    return this.evalRepo.save(evaluation);
  }

  async getEvaluations(pfe_id: number): Promise<PfeEvaluation[]> {
    return this.evalRepo.find({ where: { pfe: { id: pfe_id } } });
  }
}
