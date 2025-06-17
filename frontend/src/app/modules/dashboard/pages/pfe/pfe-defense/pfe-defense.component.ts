import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PfeService } from '../../../../../services/pfe.service';

@Component({
  selector: 'app-pfe-defense',
  templateUrl: './pfe-defense.component.html',
  styleUrls: ['./pfe-defense.component.scss']
})
export class PfeDefenseComponent {
  defenseDate!: Date;

  constructor(
    private route: ActivatedRoute,
    private pfeService: PfeService
  ) {}

scheduleDefense(id: number, defenseDate: Date) {
  this.pfeService.scheduleDefense(id, defenseDate).subscribe(() => {
    alert('Soutenance planifiée');
  });
}
}
