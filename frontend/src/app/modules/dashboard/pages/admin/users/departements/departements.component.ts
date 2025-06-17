// src/app/components/admin/departments/departments.component.ts

import { Component, OnInit } from '@angular/core';

import { gsap } from 'gsap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../../../../../../models/department.model';
import { AcademicService } from '../../../../../../services/admin/academic.service';
import { ToastService } from '../../../../../../services/toast.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.scss'],
})
export class DepartementsComponent implements OnInit {
  departments: Department[] = [];
  filteredDepartments: Department[] = [];
  isLoading = true;
  searchQuery = '';
  // Add this property to the DepartmentsComponent class
  isSubmitting = false;

  // Modal states
  showCreateModal = false;
  showDeleteModal = false;
  departmentToDelete: Department | null = null;

  // Form
  departmentForm: FormGroup;

  constructor(
    private academicService: AcademicService,
    private fb: FormBuilder,
    private toastService: ToastService
  ) {
    this.departmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      code: ['', [Validators.required, Validators.maxLength(10)]],
      academicInstitutionId: [null],
    });
  }

  ngOnInit(): void {
    this.loadDepartments();
    this.initAnimations();
  }

  initAnimations(): void {
    gsap.from('.department-card', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.3,
    });
  }

  loadDepartments(): void {
    this.isLoading = true;
    this.academicService.getDepartments().subscribe({
      next: (departments) => {
        this.departments = departments;
        this.filteredDepartments = [...departments];
        this.isLoading = false;

        gsap.to('.department-card', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
        });
      },
      error: (err) => {
        this.toastService.showError(
          'Erreur lors du chargement des départements'
        );
        this.isLoading = false;
      },
    });
  }

  searchDepartments(): void {
    if (!this.searchQuery) {
      this.filteredDepartments = [...this.departments];
      return;
    }

    const query = this.searchQuery.toLowerCase();
    this.filteredDepartments = this.departments.filter(
      (dept) =>
        dept.name.toLowerCase().includes(query) ||
        dept.code.toLowerCase().includes(query) ||
        dept.academicInstitution?.name.toLowerCase().includes(query)
    );
  }

  openCreateModal(): void {
    this.showCreateModal = true;
    gsap.from('.modal-entrance', {
      opacity: 0,
      y: 30,
      duration: 0.3,
      ease: 'back.out(1.7)',
    });
  }

  closeCreateModal(): void {
    gsap.to('.modal-entrance', {
      opacity: 0,
      y: 30,
      duration: 0.2,
      ease: 'back.in(1.7)',
      onComplete: () => {
        this.showCreateModal = false;
        this.departmentForm.reset();
      },
    });
  }

  openDeleteModal(department: Department): void {
    this.departmentToDelete = department;
    this.showDeleteModal = true;

    // Highlight the card being deleted
    const cardElement = document.querySelector(
      `[data-dept-id="${department.id}"]`
    );
    if (cardElement) {
      gsap.to(cardElement, {
        backgroundColor: '#fee2e2',
        duration: 0.3,
      });
    }

    gsap.from('.modal-entrance', {
      opacity: 0,
      y: 30,
      duration: 0.3,
      ease: 'back.out(1.7)',
    });
  }

  closeDeleteModal(): void {
    // Reset card highlight
    if (this.departmentToDelete) {
      const cardElement = document.querySelector(
        `[data-dept-id="${this.departmentToDelete.id}"]`
      );
      if (cardElement) {
        gsap.to(cardElement, {
          backgroundColor: '#ffffff',
          duration: 0.3,
        });
      }
    }

    gsap.to('.modal-entrance', {
      opacity: 0,
      y: 30,
      duration: 0.2,
      ease: 'back.in(1.7)',
      onComplete: () => {
        this.showDeleteModal = false;
        this.departmentToDelete = null;
      },
    });
  }

  confirmDelete(): void {
    if (!this.departmentToDelete) return;

    this.academicService
      .deleteDepartment(this.departmentToDelete.id)
      .subscribe({
        next: () => {
          const cardElement = document.querySelector(
            `[data-dept-id="${this.departmentToDelete?.id}"]`
          );

          if (cardElement) {
            gsap.to(cardElement, {
              opacity: 0,
              x: 100,
              height: 0,
              marginBottom: 0,
              paddingTop: 0,
              paddingBottom: 0,
              duration: 0.5,
              ease: 'back.in(1.7)',
              onComplete: () => {
                this.departments = this.departments.filter(
                  (d) => d.id !== this.departmentToDelete?.id
                );
                this.filteredDepartments = [...this.departments];
                this.toastService.showSuccess(
                  'Département supprimé avec succès'
                );
                this.closeDeleteModal();
              },
            });
          } else {
            this.departments = this.departments.filter(
              (d) => d.id !== this.departmentToDelete?.id
            );
            this.filteredDepartments = [...this.departments];
            this.toastService.showSuccess('Département supprimé avec succès');
            this.closeDeleteModal();
          }
        },
        error: (err) => {
          this.toastService.showError(
            'Erreur lors de la suppression du département'
          );
          this.closeDeleteModal();
        },
      });
  }

  onSubmit(): void {
    if (this.departmentForm.invalid) return;

    this.isSubmitting = true;
    const formData = this.departmentForm.value;

    this.academicService.createDepartment(formData).subscribe({
      next: (newDept) => {
        this.departments.unshift(newDept);
        this.filteredDepartments = [...this.departments];
        this.toastService.showSuccess('Département créé avec succès');
        this.closeCreateModal();

        // Animation for new department
        gsap.from('.department-card:first-child', {
          scale: 0.9,
          backgroundColor: '#a78bfa',
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
        });
      },
      error: (err) => {
        this.toastService.showError(
          'Erreur lors de la création du département'
        );
        this.isSubmitting = false;
      },
    });
  }
}
