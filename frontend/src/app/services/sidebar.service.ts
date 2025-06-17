import { Injectable } from '@angular/core';
import { SidebarItem } from '../models/sidebar-item.model';
import { PositionType, RoleType } from '../core/enum/Role&PositionType.enum';

// Icon constants for maintainability
const ICONS = {
  HOME: 'home',
  USERS: 'users-cog',
  STUDENT: 'user-graduate',
  TEACHER: 'chalkboard-teacher',
  INDUSTRY: 'user-tie',
  DEPARTMENT: 'sitemap',
  INSTITUTION: 'building',
  COMPANY: 'building',
  PROJECT: 'file-contract',
  IDEA: 'lightbulb',
  FOLDER: 'folder-open',
  DOCUMENT: 'file-upload',
  MICROPHONE: 'microphone',
  USER_GRADUATE: 'user-graduate',
  STAR: 'star',
  TASKS: 'tasks',
  CALENDAR_ALT: 'calendar-alt',
  CHART_BAR: 'chart-bar',
  ASSIGN: 'user-plus',
  APPROVAL: 'stamp',
  GRADE: 'pen-fancy',
  INTERNSHIP: 'briefcase',
  SUPERVISION: 'binoculars',
  DEFENSE: 'chalkboard',
  CALENDAR: 'calendar-check',
  EVALUATION: 'clipboard-list',
  RESULTS: 'award',
  SETTINGS: 'cog',
  ANALYTICS: 'chart-line',
  MESSAGING: 'envelope',
  LIBRARY: 'book',
  PROGRESS: 'tasks',
  SECURITY: 'shield-alt',
  AUDIT: 'history',
  WORKLOAD: 'balance-scale'
};

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarConfig: SidebarItem[] = this.buildSidebarConfig();

  getSidebarItems(userRole: RoleType, userPosition?: PositionType): SidebarItem[] {
    return this.filterItemsByAccess(this.sidebarConfig, userRole, userPosition);
  }

  getSidebarItem(route: string, userRole: RoleType, userPosition?: PositionType): SidebarItem | undefined {
    return this.flattenSidebar(this.sidebarConfig)
      .find(item => item.route === route && this.hasAccess(item, userRole, userPosition));
  }

  private buildSidebarConfig(): SidebarItem[] {
    return [
      this.buildHomeItem(),
      this.buildUserManagementItems(),
      this.buildAcademicStructureItems(),
      this.buildCompanyItem(),
      this.buildProjectItems(), // This includes detailed PFE routes
      this.buildInternshipItems(),
      this.buildDocumentItem(),
      this.buildDefenseItems(),
      this.buildAnalyticsItem(),
      this.buildMessagingItem(),
      this.buildLibraryItem(),
      this.buildProgressItem(),
      this.buildSecurityItems(),
      this.buildSettingsItem()
    ];
  }

  // Home Item
  private buildHomeItem(): SidebarItem {
    return {
      name: 'Accueil',
      route: '/dashboard/home',
      icon: ICONS.HOME,
      roles: [RoleType.ADMIN, RoleType.STUDENT, RoleType.TEACHER, RoleType.INDUSTRIAL_TUTOR]
    };
  }

  // User Management
  private buildUserManagementItems(): SidebarItem {
    return {
      name: 'Utilisateurs',
      icon: ICONS.USERS,
      roles: [RoleType.ADMIN],
      children: [
        {
          name: 'Gestion des Utilisateurs',
          route: '/dashboard/admin/users',
          icon: ICONS.INDUSTRY,
          roles: [RoleType.ADMIN]
        },
        {
          name: 'Gestion des Étudiants',
          route: '/dashboard/admin/users/students',
          icon: ICONS.STUDENT,
          roles: [RoleType.ADMIN]
        },
        {
          name: 'Gestion des Enseignants',
          route: '/dashboard/admin/users/teachers',
          icon: ICONS.TEACHER,
          roles: [RoleType.ADMIN]
        },
      ]
    };
  }

  // Academic Structure
  private buildAcademicStructureItems(): SidebarItem {
    return {
      name: 'Départements & Instituts',
      icon: ICONS.INSTITUTION,
      roles: [RoleType.ADMIN],
      children: [
        {
          name: 'Gestion des Départements',
          route: '/dashboard/admin/academic/departments',
          icon: ICONS.DEPARTMENT,
          roles: [RoleType.ADMIN]
        },
        {
          name: 'Gestion des Instituts',
          route: '/dashboard/admin/academic/institutions',
          icon: ICONS.INSTITUTION,
          roles: [RoleType.ADMIN]
        }
      ]
    };
  }

  // Company
  private buildCompanyItem(): SidebarItem {
    return {
      name: 'Entreprises',
      route: '/dashboard/companies',
      icon: ICONS.COMPANY,
      roles: [RoleType.ADMIN]
    };
  }

  // Project / PFE Items
  private buildProjectItems(): SidebarItem {
    return {
      name: 'PFE',
      icon: ICONS.PROJECT,
      roles: [RoleType.ADMIN, RoleType.STUDENT, RoleType.TEACHER],
      children: [
        {
          name: 'Mes Projets',
          route: '/dashboard/pfe/my-projects',
          icon: ICONS.FOLDER,
          roles: [RoleType.STUDENT]
        },
        {
          name: 'Proposer un Sujet',
          route: '/dashboard/pfe/submit-topic',
          icon: ICONS.IDEA,
          roles: [RoleType.STUDENT]
        },
        {
          name: 'Documents',
          route: '/dashboard/pfe/upload-documents',
          icon: ICONS.DOCUMENT,
          roles: [RoleType.STUDENT]
        },
        {
          name: 'Préparation Soutenance',
          route: '/dashboard/pfe/defense-prep',
          icon: ICONS.MICROPHONE,
          roles: [RoleType.STUDENT]
        },
        {
          name: 'Encadrement',
          route: '/dashboard/pfe/supervision',
          icon: ICONS.USER_GRADUATE,
          roles: [RoleType.TEACHER]
        },
        {
          name: 'Évaluation',
          route: '/dashboard/pfe/evaluate',
          icon: ICONS.STAR,
          roles: [RoleType.TEACHER]
        },
        {
          name: 'Gestion PFE',
          route: '/dashboard/pfe/manage',
          icon: ICONS.TASKS,
          roles: [RoleType.ADMIN]
        },
        {
          name: 'Planification Soutenances',
          route: '/dashboard/pfe/defense-schedule',
          icon: ICONS.CALENDAR_ALT,
          roles: [RoleType.ADMIN]
        },
        {
          name: 'Rapports',
          route: '/dashboard/pfe/reports',
          icon: ICONS.CHART_BAR,
          roles: [RoleType.ADMIN]
        }
      ]
    };
  }

  // Internship Items
  private buildInternshipItems(): SidebarItem {
    return {
      name: 'Stages',
      icon: ICONS.INTERNSHIP,
      roles: [RoleType.ADMIN, RoleType.STUDENT, RoleType.INDUSTRIAL_TUTOR],
      children: [
        {
          name: 'Demandes de Stage',
          route: '/dashboard/internships',
          icon: ICONS.DOCUMENT,
          roles: [RoleType.STUDENT]
        },
        {
          name: 'Suivi des Stages',
          route: '/dashboard/internships/supervision',
          icon: ICONS.SUPERVISION,
          roles: [RoleType.INDUSTRIAL_TUTOR]
        },
        {
          name: 'Approuver un Stage',
          route: '/dashboard/internships/approve',
          icon: ICONS.APPROVAL,
          roles: [RoleType.ADMIN]
        },
        {
          name: 'Évaluations Industrielles',
          route: '/dashboard/internships/evaluations',
          icon: ICONS.GRADE,
          roles: [RoleType.INDUSTRIAL_TUTOR]
        }
      ]
    };
  }

  // Document
  private buildDocumentItem(): SidebarItem {
    return {
      name: 'Documents',
      route: '/dashboard/documents',
      icon: ICONS.DOCUMENT,
      roles: [RoleType.ADMIN, RoleType.STUDENT, RoleType.TEACHER, RoleType.INDUSTRIAL_TUTOR]
    };
  }

  // Defense
  private buildDefenseItems(): SidebarItem {
    return {
      name: 'Soutenances',
      icon: ICONS.DEFENSE,
      roles: [RoleType.ADMIN, RoleType.STUDENT, RoleType.TEACHER],
      children: [
        {
          name: 'Programmer une Soutenance',
          route: '/dashboard/defenses/schedule',
          icon: ICONS.CALENDAR,
          roles: [RoleType.ADMIN]
        },
        {
          name: 'Évaluer une Soutenance',
          route: '/dashboard/defenses/evaluate',
          icon: ICONS.EVALUATION,
          roles: [RoleType.TEACHER]
        },
        {
          name: 'Voir les Résultats',
          route: '/dashboard/defenses/results',
          icon: ICONS.RESULTS,
          roles: [RoleType.STUDENT]
        }
      ]
    };
  }

  // Analytics
  private buildAnalyticsItem(): SidebarItem {
    return {
      name: 'Analytiques',
      route: '/dashboard/analytics',
      icon: ICONS.ANALYTICS,
      roles: [RoleType.ADMIN, RoleType.TEACHER],
      positions: [PositionType.DEPARTMENT_HEAD]
    };
  }

  // Messaging
  private buildMessagingItem(): SidebarItem {
    return {
      name: 'Messagerie',
      route: '/dashboard/messaging',
      icon: ICONS.MESSAGING,
      roles: [RoleType.ADMIN, RoleType.STUDENT, RoleType.TEACHER]
    };
  }

  // Library
  private buildLibraryItem(): SidebarItem {
    return {
      name: 'Bibliothèque',
      route: '/dashboard/library',
      icon: ICONS.LIBRARY,
      roles: [RoleType.ADMIN, RoleType.TEACHER]
    };
  }

  // Progress
  private buildProgressItem(): SidebarItem {
    return {
      name: 'Progression',
      route: '/dashboard/progress',
      icon: ICONS.PROGRESS,
      roles: [RoleType.STUDENT]
    };
  }

  // Security
  private buildSecurityItems(): SidebarItem {
    return {
      name: 'Sécurité',
      icon: ICONS.SECURITY,
      roles: [RoleType.ADMIN],
      children: [
        {
          name: 'Journal d\'Audit',
          route: '/dashboard/audit-log',
          icon: ICONS.AUDIT,
          roles: [RoleType.ADMIN],
          requiresOTP: true
        }
      ]
    };
  }

  // Settings
  private buildSettingsItem(): SidebarItem {
    return {
      name: 'Paramètres',
      route: '/dashboard/settings',
      icon: ICONS.SETTINGS,
      roles: [RoleType.ADMIN]
    };
  }

  // Helper Methods
  private filterItemsByAccess(items: SidebarItem[], userRole: RoleType, userPosition?: PositionType): SidebarItem[] {
    return items
      .filter(item => this.hasAccess(item, userRole, userPosition))
      .map(item => ({
        ...item,
        children: item.children
          ? this.filterItemsByAccess(item.children, userRole, userPosition)
          : undefined
      }))
      .filter(item => !item.children || item.children.length > 0);
  }

  private flattenSidebar(items: SidebarItem[]): SidebarItem[] {
    return items.reduce((acc: SidebarItem[], item) => {
      acc.push(item);
      if (item.children) {
        acc.push(...this.flattenSidebar(item.children));
      }
      return acc;
    }, []);
  }

  private hasAccess(item: SidebarItem, userRole: RoleType, userPosition?: PositionType): boolean {
    const roleMatch = item.roles.includes(userRole);
    const positionMatch = !item.positions || !userPosition || item.positions?.includes(userPosition);
    return roleMatch && positionMatch;
  }
}
