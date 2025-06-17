import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PfeService } from '../../../../../services/pfe.service';
import { EvaluationType } from '../../../../../core/enum/pfe.enum';

@Component({
  selector: 'app-pfe-evaluate',
  templateUrl: './pfe-evaluate.component.html',
  styleUrls: ['./pfe-evaluate.component.scss']
})
export class PfeEvaluateComponent implements OnInit {
  pfeId: number = 0;

  evaluationForm = {
    score: 0,
    feedback: '',
    evaluator_id: 1,
    type: EvaluationType.PROPOSAL
  };

  evaluationTypes = [
    EvaluationType.PROPOSAL,
    EvaluationType.MIDTERM,
    EvaluationType.FINAL
  ];

  constructor(
    private route: ActivatedRoute,
    private pfeService: PfeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pfeId = +params['id'];
    });
  }

  onSubmit() {
    const dto = {
      pfe_id: this.pfeId,
      ...this.evaluationForm
    };

    this.pfeService.evaluate(dto).subscribe(() => {
      alert('Évaluation soumise');
    });
  }
}
