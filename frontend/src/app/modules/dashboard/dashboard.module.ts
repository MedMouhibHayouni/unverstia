import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { StudentsComponent } from './pages/students/students.component';

import { SupervisionsComponent } from './pages/supervisions/supervisions.component';
import { InternshipsComponent } from './pages/internships/internships.component';
import { DefenseScheduleComponent } from './pages/defense-schedule/defense-schedule.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { User } from '../../models/user.model';
import { UserListComponent } from './pages/admin/users/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './pages/admin/users/user-form/user-form.component';
import { UserRolesComponent } from './pages/admin/users/user-roles/user-roles.component';
import { StudentListComponent } from './pages/admin/users/student-list/student-list.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TeacherListComponent } from './pages/admin/users/teacher-list/teacher-list.component';
import { DepartementsComponent } from './pages/admin/users/departements/departements.component';
import { InstitutionsComponent } from './pages/admin/users/institutions/institutions.component';
import { PfeModule } from '../pfe/pfe.module';
import { DragDropModule } from '@angular/cdk/drag-drop';




@NgModule({
  declarations: [
    DashboardComponent,
    TopbarComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    SettingsComponent,
    StudentsComponent,
    SupervisionsComponent,
    InternshipsComponent,
    DefenseScheduleComponent,
    ReportsComponent,
    UserListComponent,
    UserFormComponent,
    UserRolesComponent,
    StudentListComponent,
    TeacherListComponent,
    DepartementsComponent,
    InstitutionsComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatTooltipModule,
    DragDropModule




  ]
})
export class DashboardModule { }
