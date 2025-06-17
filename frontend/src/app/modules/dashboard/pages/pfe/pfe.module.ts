import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PfeRoutingModule } from './pfe-routing.module';
import { PfeListComponent } from './pfe-list/pfe-list.component';
import { PfeSubmitComponent } from './pfe-submit/pfe-submit.component';
import { PfeDocumentsComponent } from './pfe-documents/pfe-documents.component';
import { PfeDefenseComponent } from './pfe-defense/pfe-defense.component';
import { PfeSupervisionComponent } from './pfe-supervision/pfe-supervision.component';
import { PfeEvaluateComponent } from './pfe-evaluate/pfe-evaluate.component';
import { PfeManageComponent } from './pfe-manage/pfe-manage.component';
import { PfeScheduleComponent } from './pfe-schedule/pfe-schedule.component';
import { PfeReportsComponent } from './pfe-reports/pfe-reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncatePipe } from '../../../../truncate.pipe';


@NgModule({
  declarations: [
    PfeListComponent,
    PfeSubmitComponent,
    PfeDocumentsComponent,
    PfeDefenseComponent,
    PfeSupervisionComponent,
    PfeEvaluateComponent,
    PfeManageComponent,
    PfeScheduleComponent,
    PfeReportsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PfeRoutingModule
  ]
})
export class PfeModule { }
