import { Component, OnInit } from '@angular/core';
import { PfeService } from '../../../../../services/pfe.service';

@Component({
  selector: 'app-pfe-manage',
  templateUrl: './pfe-manage.component.html',
  styleUrls: ['./pfe-manage.component.scss']
})
export class PfeManageComponent implements OnInit {
  pfes: any[] = [];

  constructor(private pfeService: PfeService) {}

  ngOnInit(): void {
    this.pfeService.getAll().subscribe(pfes => {
      this.pfes = pfes;
    });
  }

  approve(id: number) {
    this.pfeService.approve(id).subscribe(() => {
      this.pfes = this.pfes.filter(pfe => pfe.id !== id);
    });
  }

  reject(id: number) {
    this.pfeService.reject(id).subscribe(() => {
      this.pfes = this.pfes.filter(pfe => pfe.id !== id);
    });
  }
}
