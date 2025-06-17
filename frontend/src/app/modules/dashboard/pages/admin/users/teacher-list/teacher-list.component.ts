import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { Teacher } from '../../../../../../models/teacher.model';
import { TeacherService } from '../../../../../../services/admin/teacher.service';
import { DepartmentService } from '../../../../../../services/admin/department.service';
import { Department } from '../../../../../../models/department.model';
import { PositionType } from '../../../../../../core/enum/Role&PositionType.enum';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[] = [];
  filteredTeachers: Teacher[] = [];
  departments: Department[] = [];
  searchTerm = '';
  selectedPosition = '';
  selectedDepartment = '';
  isLoading = true;
  showDeleteModal = false;
  teacherToDelete: Teacher | null = null;

  // Exposer l'enum au template
  PositionType = PositionType;

  // Liste des positions pour le select
  positionTypes = Object.values(PositionType);

  constructor(
    private teacherService: TeacherService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.loadDepartments();
    this.loadTeachers();
  }

  private loadDepartments(): void {
    this.departmentService.getAllDepartments().subscribe({
      next: (departments) => {
        this.departments = departments;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des départements:', err);
      }
    });
  }

  private loadTeachers(): void {
    this.isLoading = true;
    this.teacherService.getAllTeachers().subscribe({
      next: (teachers) => {
        this.teachers = teachers;
        this.filteredTeachers = [...teachers];
        this.isLoading = false;
        this.initAnimations();
      },
      error: (err) => {
        console.error('Erreur lors du chargement des enseignants:', err);
        this.isLoading = false;
      }
    });
  }

  private initAnimations(): void {
  // Initialiser GSAP avec des configurations plus robustes
  gsap.set('.teacher-card, .stats-card, .filter-section, .search-container', {
    visibility: 'visible'
  });

  // Animation des cartes enseignants
  gsap.from('.teacher-card', {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.6,
    ease: "power2.out",
    delay: 0.3,
    immediateRender: false // Important pour éviter le flash
  });

  // Animation des statistiques
  gsap.from('.stats-card', {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.6,
    ease: "elastic.out(1, 0.5)",
    delay: 0.1,
    immediateRender: false
  });

  // Animation de la barre de recherche
  gsap.from('.search-container', {
    opacity: 0,
    x: -20,
    duration: 0.5,
    delay: 0.2,
    immediateRender: false
  });

  // Animation des filtres
  gsap.from('.filter-section', {
    opacity: 0,
    y: 10,
    duration: 0.5,
    delay: 0.4,
    immediateRender: false
  });

  // Gestion de l'état vide
  if (this.filteredTeachers.length === 0) {
    const tl = gsap.timeline();
    tl.to('.empty-state svg', {
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    })
    .to('.empty-state h3', {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.3")
    .to('.empty-state p', {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.2")
    .to('.empty-state button', {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.2");
  }
}



  filterTeachers(): void {
    this.filteredTeachers = this.teachers.filter(teacher => {
      const matchesSearch = !this.searchTerm ||
        teacher.user.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        teacher.user.last_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        teacher.position.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesPosition = !this.selectedPosition || teacher.position === this.selectedPosition;
      const matchesDepartment = !this.selectedDepartment || teacher.department_id === +this.selectedDepartment;

      return matchesSearch && matchesPosition && matchesDepartment;
    });

    // Animation de re-filtrage
    gsap.fromTo('.teacher-card',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 0.4, ease: "power2.out" }
    );
  }

  getPositionLabel(position: PositionType): string {
    switch(position) {
      case PositionType.ASSISTANT_PROF: return 'Assistant Professeur';
      case PositionType.PROFESSOR: return 'Professeur';
      case PositionType.DEPARTMENT_HEAD: return 'Chef de Département';
      case PositionType.HEADMASTER: return 'Directeur';
      default: return position;
    }
  }

  getDepartmentName(departmentId: number): string {
    const dept = this.departments.find(d => d.id === departmentId);
    return dept ? dept.name : '';
  }

  /*getStatusColor(status: UserStatus): string {
    switch(status) {
      case UserStatus.ACTIVE: return 'bg-green-500';
      case UserStatus.INACTIVE: return 'bg-gray-500';
      case UserStatus.SUSPENDED: return 'bg-yellow-500';
      case UserStatus.PENDING: return 'bg-blue-500';
      default: return 'bg-gray-300';
    }
  }*/

  countByPosition(position: PositionType): number {
    return this.teachers.filter(t => t.position === position).length;
  }

  openDeleteModal(teacher: Teacher): void {
    this.teacherToDelete = teacher;
    this.showDeleteModal = true;

    // Animation du modal
    gsap.from('.modal-entrance', {
      opacity: 0,
      y: 30,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  }

  cancelDelete(): void {
    this.showDeleteModal = false;
    this.teacherToDelete = null;
  }

  confirmDelete(): void {
    if (this.teacherToDelete) {
      this.teacherService.deleteTeacher(this.teacherToDelete.id).subscribe({
        next: () => {
          this.showDeleteModal = false;
          this.loadTeachers();

          // Animation de confirmation
          const tl = gsap.timeline();
          tl.to('.modal-entrance', {
            opacity: 0,
            y: -30,
            duration: 0.3,
            ease: "back.in(1.7)",
            onComplete: () => this.teacherToDelete = null
          });
        },
        error: (err) => {
          console.error('Erreur lors de la suppression:', err);
          this.showDeleteModal = false;
        }
      });
    }
  }

  openEditModal(teacher: Teacher): void {
    // Implémentez la logique pour ouvrir un modal d'édition
    console.log('Modifier enseignant:', teacher);
  }

  resetFilters(): void {
    this.selectedPosition = '';
    this.selectedDepartment = '';
    this.searchTerm = '';
    this.filterTeachers();

    // Petite animation de réinitialisation
    gsap.from('.filter-section', {
      y: -10,
      duration: 0.3,
      ease: "elastic.out(1, 0.5)"
    });
  }
}
