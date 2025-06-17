import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PfeListComponent } from './pfe-list/pfe-list.component';
import { PfeSubmitComponent } from './pfe-submit/pfe-submit.component';
import { PfeDocumentsComponent } from './pfe-documents/pfe-documents.component';
import { PfeDefenseComponent } from './pfe-defense/pfe-defense.component';
import { PfeSupervisionComponent } from './pfe-supervision/pfe-supervision.component';
import { PfeEvaluateComponent } from './pfe-evaluate/pfe-evaluate.component';
import { PfeManageComponent } from './pfe-manage/pfe-manage.component';
import { PfeScheduleComponent } from './pfe-schedule/pfe-schedule.component';
import { PfeReportsComponent } from './pfe-reports/pfe-reports.component';
import { RoleType } from '../../../../core/enum/Role&PositionType.enum';


const routes: Routes = [
  {
    path: 'my-projects',
    component: PfeListComponent,
    data: {
      roles: [RoleType.STUDENT],
      sidebarItem: {
        name: 'Mes Projets',
        icon: 'folder-open',
        roles: [RoleType.STUDENT]
      }
    }
  },
  {
    path: 'submit-topic',
    component: PfeSubmitComponent,
    data: {
      roles: [RoleType.STUDENT],
      sidebarItem: {
        name: 'Proposer un Sujet',
        icon: 'lightbulb',
        roles: [RoleType.STUDENT]
      }
    }
  },
  {
    path: 'upload-documents',
    component: PfeDocumentsComponent,
    data: {
      roles: [RoleType.STUDENT],
      sidebarItem: {
        name: 'Documents',
        icon: 'file-upload',
        roles: [RoleType.STUDENT]
      }
    }
  },
  {
    path: 'defense-prep',
    component: PfeDefenseComponent,
    data: {
      roles: [RoleType.STUDENT],
      sidebarItem: {
        name: 'Préparation Soutenance',
        icon: 'microphone',
        roles: [RoleType.STUDENT]
      }
    }
  },
  {
    path: 'supervision',
    component: PfeSupervisionComponent,
    data: {
      roles: [RoleType.TEACHER],
      sidebarItem: {
        name: 'Encadrement',
        icon: 'user-graduate',
        roles: [RoleType.TEACHER]
      }
    }
  },
  {
    path: 'evaluate',
    component: PfeEvaluateComponent,
    data: {
      roles: [RoleType.TEACHER],
      sidebarItem: {
        name: 'Évaluation',
        icon: 'star',
        roles: [RoleType.TEACHER]
      }
    }
  },
  {
    path: 'manage',
    component: PfeManageComponent,
    data: {
      roles: [RoleType.ADMIN],
      sidebarItem: {
        name: 'Gestion PFE',
        icon: 'tasks',
        roles: [RoleType.ADMIN]
      }
    }
  },
  {
    path: 'defense-schedule',
    component: PfeScheduleComponent,
    data: {
      roles: [RoleType.ADMIN],
      sidebarItem: {
        name: 'Planification Soutenances',
        icon: 'calendar-alt',
        roles: [RoleType.ADMIN]
      }
    }
  },
  {
    path: 'reports',
    component: PfeReportsComponent,
    data: {
      roles: [RoleType.ADMIN],
      sidebarItem: {
        name: 'Rapports',
        icon: 'chart-bar',
        roles: [RoleType.ADMIN]
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PfeRoutingModule { }
