// pfe-supervision.component.ts
import { Component, OnInit } from '@angular/core';
import { PfeService } from '../../../../../services/pfe.service';
import { ToastService } from '../../../../../services/toast.service';
import { Pfe } from '../../../../../models/pfe/pfe.model';
import { PfeStatus } from '../../../../../core/enum/pfe.enum';
import { AuthService } from '../../../../../services/auth.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-pfe-supervision',
  templateUrl: './pfe-supervision.component.html',
  styleUrls: ['./pfe-supervision.component.scss'],
})
export class PfeSupervisionComponent implements OnInit {
  supervisedProjects: Pfe[] = [];
  filteredProjects: Pfe[] = [];
  isLoading = true;
  activeTab = 'active';
  searchQuery = '';
  PfeStatus = PfeStatus;

  // Modal properties
  showModal = false;
  selectedProject: Pfe | null = null;
  modalLoading = false;

  constructor(
    private pfeService: PfeService,
    private toastr: ToastService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadSupervisedProjects();
  }

  // Add this method to format dates
 formatDate(date: Date | string | undefined): string {
  if (!date) return 'Non spécifié';

  try {
    // If date is already in "dd/MM/yyyy" format, return it directly
    if (typeof date === 'string' && /^\d{2}\/\d{2}\/\d{4}$/.test(date)) {
      return date;
    }

    const d = new Date(date);
    if (isNaN(d.getTime())) return 'Date invalide';

    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  } catch (e) {
    console.error('Error formatting date:', e);
    return 'Date invalide';
  }
}

  loadSupervisedProjects(): void {
    this.isLoading = true;

    // Get supervisor ID from auth service
    const currentUser = this.authService.getUser();
    if (!currentUser || !currentUser.id) {
      this.isLoading = false;
      this.toastr.showError('Utilisateur non authentifié');
      return;
    }

    this.pfeService.getSupervisedPfes(currentUser.id).subscribe({
      next: (projects) => {
        this.supervisedProjects = projects;
        this.filterProjects();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        this.isLoading = false;
        this.toastr.showError('Erreur lors du chargement des projets');
      },
    });
  }

  getStudentInfo(project: Pfe): {
    name: string;
    degree: string;
    level: string;
    profilePicture: string;
  } {
    return {
      name: project.student?.user
        ? `${project.student.user.first_name || ''} ${
            project.student.user.last_name || ''
          }`
        : 'Étudiant inconnu',
      degree: project.student?.degree?.name || 'Non spécifié',
      level: project.student?.level || 'Non spécifié',
      profilePicture:
        project.student?.user?.profile_picture ||
        'assets/images/default-avatar.png',
    };
  }

  filterProjects(): void {
    this.filteredProjects = this.supervisedProjects.filter((project) => {
      // Safe navigation for search
      const studentName = project.student?.user
        ? `${project.student.user.first_name || ''} ${
            project.student.user.last_name || ''
          }`.toLowerCase()
        : '';

      const matchesSearch =
        project.title?.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        studentName.includes(this.searchQuery.toLowerCase());

      // Status filter
      const matchesStatus =
        this.activeTab === 'all' ||
        (this.activeTab === 'active' &&
          project.status !== PfeStatus.COMPLETED &&
          project.status !== PfeStatus.DEFENDED) ||
        (this.activeTab === 'completed' &&
          (project.status === PfeStatus.COMPLETED ||
            project.status === PfeStatus.DEFENDED));

      return matchesSearch && matchesStatus;
    });
  }

  openProjectDetails(id: number): void {
    this.modalLoading = true;
    this.showModal = true;

    this.pfeService.getPfeById(id).subscribe({
      next: (project) => {
        this.selectedProject = project;
        this.modalLoading = false;
      },
      error: (error) => {
        console.error('Error loading project details:', error);
        this.toastr.showError(
          'Erreur lors du chargement des détails du projet'
        );
        this.modalLoading = false;
        this.closeModal();
      },
    });
  }

  private processProject(project: Pfe): Pfe {
    return {
      ...project,
      student: project.student || {
        user: {
          first_name: 'Inconnu',
          last_name: '',
          profile_picture: 'assets/images/default-avatar.png',
        },
        degree: {
          name: 'Non spécifié',
        },
        level: 'Non spécifié',
      },
    };
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProject = null;
  }

  onSearchChange(): void {
    this.filterProjects();
  }

  onTabChange(tab: string): void {
    this.activeTab = tab;
    this.filterProjects();
  }
}
