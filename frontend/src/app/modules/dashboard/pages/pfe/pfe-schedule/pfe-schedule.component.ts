import { Component } from '@angular/core';
import { PfeService } from '../../../../../services/pfe.service';

@Component({
  selector: 'app-pfe-schedule',
  templateUrl: './pfe-schedule.component.html',
  styleUrls: ['./pfe-schedule.component.scss']
})
export class PfeScheduleComponent {
  defenseDate!: Date;

  constructor(private pfeService: PfeService) {}

  scheduleDefense(id: number) {
    this.pfeService.scheduleDefense(id, this.defenseDate).subscribe(() => {
      alert('Soutenance planifiée');
    });
  }
}
