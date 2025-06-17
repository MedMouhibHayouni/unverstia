import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../../services/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { PositionType, RoleType } from '../../core/enum/Role&PositionType.enum';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RoleGuard } from '../../services/role.guard';

// User Management Components
import { UserListComponent } from './pages/admin/users/user-list/user-list.component';
import { UserFormComponent } from './pages/admin/users/user-form/user-form.component';
import { StudentListComponent } from './pages/admin/users/student-list/student-list.component';
import { TeacherListComponent } from './pages/admin/users/teacher-list/teacher-list.component';
import { DepartementsComponent } from './pages/admin/users/departements/departements.component';
import { InstitutionsComponent } from './pages/admin/users/institutions/institutions.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      // Home (All roles)
      {
        path: 'home',
        component: HomeComponent,
        data: {
          sidebarItem: {
            name: 'Accueil',
            icon: 'home',
            roles: [
              RoleType.ADMIN,
              RoleType.STUDENT,
              RoleType.TEACHER,
              RoleType.INDUSTRIAL_TUTOR,
            ],
          },
        },
      },

      {
        path: 'pfe',
        loadChildren: () =>
          import('./pages/pfe/pfe.module').then((m) => m.PfeModule),
        canActivate: [AuthGuard], // Optional
      },

      // Profile (All roles)
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          sidebarItem: {
            name: 'Profil',
            icon: 'user',
            roles: [
              RoleType.ADMIN,
              RoleType.STUDENT,
              RoleType.TEACHER,
              RoleType.INDUSTRIAL_TUTOR,
            ],
          },
        },
      },

      // ======================
      // ADMIN USER MANAGEMENT
      // ======================
      {
        path: 'admin/users',
        component: UserListComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [RoleType.ADMIN],
          sidebarItem: {
            name: 'Tous les Utilisateurs',
            icon: 'users-cog',
            roles: [RoleType.ADMIN],
          },
        },
      },
      {
        path: 'admin/users/students',
        component: StudentListComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [RoleType.ADMIN],
          sidebarItem: {
            name: 'Gestion des Étudiants',
            icon: 'user-graduate',
            parent: 'Utilisateurs',
            roles: [RoleType.ADMIN],
          },
        },
      },
      {
        path: 'admin/users/teachers',
        component: TeacherListComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [RoleType.ADMIN],
          sidebarItem: {
            name: 'Gestion des Enseignants',
            icon: 'chalkboard-teacher',
            parent: 'Utilisateurs',
            roles: [RoleType.ADMIN],
          },
        },
      },
      /*{
        path: 'admin/users/industrial-tutors',
        component: IndustrialTutorListComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [RoleType.ADMIN],
          sidebarItem: {
            name: 'Gestion des Tuteurs Industriels',
            icon: 'user-tie',
            parent: 'Utilisateurs',
            roles: [RoleType.ADMIN]
          }
        }
      },*/
      {
        path: 'admin/users/new',
        component: UserFormComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [RoleType.ADMIN],
          sidebarItem: {
            name: 'Nouvel Utilisateur',
            icon: 'user-plus',
            roles: [RoleType.ADMIN],
          },
        },
      },
      {
        path: 'admin/users/edit/:id',
        component: UserFormComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [RoleType.ADMIN],
          sidebarItem: {
            name: 'Modifier Utilisateur',
            icon: 'user-edit',
            roles: [RoleType.ADMIN],
          },
        },
      },

      // ======================
      // ACADEMIC STRUCTURE
      // ======================
      {
        path: 'admin/academic/institutions',
        component: InstitutionsComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [RoleType.ADMIN],
          sidebarItem: {
            name: 'Gestion des Instituts',
            icon: 'building',
            parent: 'Départements & Instituts',
            roles: [RoleType.ADMIN],
          },
        },
      },
      {
        path: 'admin/academic/departments',
        component: DepartementsComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [RoleType.ADMIN],
          sidebarItem: {
            name: 'Gestion des Départements',
            icon: 'sitemap',
            parent: 'Départements & Instituts',
            roles: [RoleType.ADMIN],
          },
        },
      },

      // ======================
      // PFE MANAGEMENT
      // ======================
      /*{
        path: 'admin/pfe/topics',
        component: PfeTopicsComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [RoleType.ADMIN],
          sidebarItem: {
            name: 'Sujets PFE',
            icon: 'lightbulb',
            parent: 'PFE',
            roles: [RoleType.ADMIN]
          }
        }
      },*/
      /*{
        path: 'admin/pfe/assign',
        component: PfeAssignComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [RoleType.TEACHER],
          positions: [PositionType.DEPARTMENT_HEAD],
          sidebarItem: {
            name: 'Affecter un Encadrant',
            icon: 'user-plus',
            parent: 'PFE',
            roles: [RoleType.TEACHER],
            positions: [PositionType.DEPARTMENT_HEAD]
          }
        }
      },*/

      // ======================
      // INTERNSHIP MANAGEMENT
      // ======================
      /*{
        path: 'admin/internships/queue',
        component: InternshipQueueComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [RoleType.ADMIN],
          sidebarItem: {
            name: 'Approuver un Stage',
            icon: 'stamp',
            parent: 'Stages',
            roles: [RoleType.ADMIN]
          }
        }
      },*/

      // ======================
      // SYSTEM
      // ======================
      /*{
        path: 'admin/system/audit-log',
        component: AuditLogComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [RoleType.ADMIN],
          requiresOTP: true,
          sidebarItem: {
            name: "Journal d'Audit",
            icon: 'history',
            parent: 'Sécurité',
            roles: [RoleType.ADMIN],
            requiresOTP: true
          }
        }
      },*/

      // ======================
      // SETTINGS
      // ======================
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [RoleType.ADMIN],
          sidebarItem: {
            name: 'Paramètres',
            icon: 'cog',
            roles: [RoleType.ADMIN],
          },
        },
      },

      // Redirect
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
