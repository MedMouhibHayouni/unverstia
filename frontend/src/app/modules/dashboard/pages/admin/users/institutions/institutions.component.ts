// src/app/components/admin/institutions/institutions.component.ts

import { Component, OnInit } from '@angular/core';

import { gsap } from 'gsap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AcademicInstitution } from '../../../../../../models/department.model';
import { AcademicService } from '../../../../../../services/admin/academic.service';
import { ToastService } from '../../../../../../services/toast.service';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss'],
})
export class InstitutionsComponent implements OnInit {
  institutions: AcademicInstitution[] = [];
  filteredInstitutions: AcademicInstitution[] = [];
  isLoading = true;
  searchQuery = '';

  // Modal states
  showCreateModal = false;
  showDeleteModal = false;
  institutionToDelete: AcademicInstitution | null = null;
  // Add this property to the DepartmentsComponent class
  isSubmitting = false;

  // Form
  institutionForm: FormGroup;

  constructor(
    private academicService: AcademicService,
    private fb: FormBuilder,
    private toastService: ToastService
  ) {
    this.institutionForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      university: ['', [Validators.required, Validators.maxLength(100)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      director: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  ngOnInit(): void {
    this.loadInstitutions();
    this.initAnimations();
  }

  initAnimations(): void {
    gsap.from('.institution-card', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.3,
    });
  }

  loadInstitutions(): void {
    this.isLoading = true;
    this.academicService.getInstitutions().subscribe({
      next: (institutions) => {
        this.institutions = institutions;
        this.filteredInstitutions = [...institutions];
        this.isLoading = false;

        gsap.to('.institution-card', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
        });
      },
      error: (err) => {
        this.toastService.showError('Erreur lors du chargement des instituts');
        this.isLoading = false;
      },
    });
  }

  searchInstitutions(): void {
    if (!this.searchQuery) {
      this.filteredInstitutions = [...this.institutions];
      return;
    }

    const query = this.searchQuery.toLowerCase();
    this.filteredInstitutions = this.institutions.filter(
      (inst) =>
        inst.name.toLowerCase().includes(query) ||
        inst.university.toLowerCase().includes(query) ||
        inst.director.toLowerCase().includes(query)
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
        this.institutionForm.reset();
      },
    });
  }

  openDeleteModal(institution: AcademicInstitution): void {
    this.institutionToDelete = institution;
    this.showDeleteModal = true;

    // Highlight the card being deleted
    const cardElement = document.querySelector(
      `[data-inst-id="${institution.id}"]`
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
    if (this.institutionToDelete) {
      const cardElement = document.querySelector(
        `[data-inst-id="${this.institutionToDelete.id}"]`
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
        this.institutionToDelete = null;
      },
    });
  }

  confirmDelete(): void {
    if (!this.institutionToDelete) return;

    this.academicService
      .deleteInstitution(this.institutionToDelete.id)
      .subscribe({
        next: () => {
          const cardElement = document.querySelector(
            `[data-inst-id="${this.institutionToDelete?.id}"]`
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
                this.institutions = this.institutions.filter(
                  (i) => i.id !== this.institutionToDelete?.id
                );
                this.filteredInstitutions = [...this.institutions];
                this.toastService.showSuccess('Institut supprimé avec succès');
                this.closeDeleteModal();
              },
            });
          } else {
            this.institutions = this.institutions.filter(
              (i) => i.id !== this.institutionToDelete?.id
            );
            this.filteredInstitutions = [...this.institutions];
            this.toastService.showSuccess('Institut supprimé avec succès');
            this.closeDeleteModal();
          }
        },
        error: (err) => {
          this.toastService.showError(
            "Erreur lors de la suppression de l'institut"
          );
          this.closeDeleteModal();
        },
      });
  }

  onSubmit(): void {
    if (this.institutionForm.invalid) return;

    this.isSubmitting = true;
    const formData = this.institutionForm.value;

    this.academicService.createInstitution(formData).subscribe({
      next: (newInst) => {
        this.institutions.unshift(newInst);
        this.filteredInstitutions = [...this.institutions];
        this.toastService.showSuccess('Institut créé avec succès');
        this.closeCreateModal();

        // Animation for new institution
        gsap.from('.institution-card:first-child', {
          scale: 0.9,
          backgroundColor: '#a78bfa',
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
        });
      },
      error: (err) => {
        this.toastService.showError("Erreur lors de la création de l'institut");
        this.isSubmitting = false;
      },
    });
  }
}
