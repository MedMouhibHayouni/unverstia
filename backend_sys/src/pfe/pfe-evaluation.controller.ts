import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { PfeEvaluationService } from './pfe-evaluation.service';
import { EvaluatePfeDto } from './dto/evaluate-pfe.dto';

@Controller('pfe-evaluations')
export class PfeEvaluationController {
  constructor(private readonly evalService: PfeEvaluationService) {}

  @Post()
  evaluate(@Body() dto: EvaluatePfeDto) {
    return this.evalService.evaluate(dto);
  }

  @Get(':pfe_id')
  getEvaluations(@Param('pfe_id') pfe_id: number) {
    return this.evalService.getEvaluations(pfe_id);
  }
}
