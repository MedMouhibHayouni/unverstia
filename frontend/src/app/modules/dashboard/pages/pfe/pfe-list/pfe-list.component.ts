import { Component, OnInit } from '@angular/core';
import { PfeService } from '../../../../../services/pfe.service';
import { Pfe } from '../../../../../models/pfe/pfe.model';


@Component({
  selector: 'app-pfe-list',
  templateUrl: './pfe-list.component.html',
  styleUrls: ['./pfe-list.component.scss']
})
export class PfeListComponent implements OnInit {
  pfes: Pfe[] = [];

  constructor(private pfeService: PfeService) {}

  ngOnInit(): void {
    this.pfeService.getAll().subscribe(pfes => {
      this.pfes = pfes;
    });
  }
}
