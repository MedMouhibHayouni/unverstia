import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PfeService } from '../../../../../services/pfe.service';
import { StudentService } from '../../../../../services/admin/student.service';
import { TeacherService } from '../../../../../services/admin/teacher.service';
import { ToastService } from '../../../../../services/toast.service';
import { Teacher } from '../../../../../models/teacher.model';
import { Student } from '../../../../../models/student.model';

@Component({
  selector: 'app-pfe-submit',
  templateUrl: './pfe-submit.component.html',
  styleUrls: ['./pfe-submit.component.scss'],
})
export class PfeSubmitComponent implements OnInit {
  createForm: FormGroup;
  isSubmitting = false;

  // Student search properties
  studentSearchQuery = '';
  filteredStudents: Student[] = [];
  showStudentResults = false;
  selectedStudent: Student | null = null;

  // Supervisor search properties
  supervisorSearchQuery = '';
  filteredTeachers: Teacher[] = []; // Changed from filteredSupervisors to filteredTeachers
  showTeacherResults = false;
  selectedTeacher: Teacher | null = null; // Changed from selectedSupervisor to selectedTeacher

  constructor(
    private fb: FormBuilder,
    private pfeService: PfeService,
    private studentService: StudentService,
    private teacherService: TeacherService,
    private toastService: ToastService
  ) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      student_id: [null, Validators.required],
      supervisor_id: [null, Validators.required],
      submission_date: [null],
      defense_date: [null],
    });
  }

  ngOnInit(): void {
    this.searchStudents();
    this.searchTeachers(); // Changed from searchSupervisors to searchTeachers
  }

  searchStudents(): void {
    if (this.studentSearchQuery.trim()) {
      this.studentService.getAllStudents().subscribe((students) => {
        this.filteredStudents = students.filter((student) =>
          `${student.user?.first_name || ''} ${student.user?.last_name || ''}`
            .toLowerCase()
            .includes(this.studentSearchQuery.toLowerCase())
        );
      });
    } else {
      this.studentService.getAllStudents().subscribe((students) => {
        this.filteredStudents = students.slice(0, 5);
      });
    }
  }

  searchTeachers(): void {
    // Changed from searchSupervisors to searchTeachers
    if (this.supervisorSearchQuery.trim()) {
      this.teacherService.getAllTeachers().subscribe((teachers) => {
        this.filteredTeachers = teachers.filter((teacher) =>
          `${teacher.user?.first_name || ''} ${teacher.user?.last_name || ''}`
            .toLowerCase()
            .includes(this.supervisorSearchQuery.toLowerCase())
        );
      });
    } else {
      this.teacherService.getAllTeachers().subscribe((teachers) => {
        this.filteredTeachers = teachers.slice(0, 5);
      });
    }
  }

  selectStudent(student: Student): void {
    this.selectedStudent = student;
    this.createForm.patchValue({ student_id: student.user_id });
    this.showStudentResults = false;
    this.studentSearchQuery = '';
  }

  selectTeacher(teacher: Teacher): void {
    // Changed from selectSupervisor to selectTeacher
    this.selectedTeacher = teacher;
    this.createForm.patchValue({ supervisor_id: teacher.user_id });
    this.showTeacherResults = false;
    this.supervisorSearchQuery = '';
  }

  clearStudentSelection(): void {
    this.selectedStudent = null;
    this.createForm.patchValue({ student_id: null });
  }

  clearTeacherSelection(): void {
    // Changed from clearSupervisorSelection to clearTeacherSelection
    this.selectedTeacher = null;
    this.createForm.patchValue({ supervisor_id: null });
  }

  onSubmit(): void {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }

    // Convert string dates to proper Date objects
    const formValue = {
      ...this.createForm.value,
      submission_date: this.createForm.value.submission_date
        ? new Date(this.createForm.value.submission_date)
        : null,
      defense_date: this.createForm.value.defense_date
        ? new Date(this.createForm.value.defense_date)
        : null,
    };

    this.isSubmitting = true;
    this.pfeService.create(formValue).subscribe({
      next: () => {
        this.toastService.showSuccess('PFE soumis avec succès');
        this.createForm.reset();
        this.selectedStudent = null;
        this.selectedTeacher = null;
        this.isSubmitting = false;
      },
      error: (err) => {
        console.error('Full error:', err);
        let errorMessage = 'Erreur lors de la soumission du PFE';
        if (err.error?.message) {
          errorMessage = Array.isArray(err.error.message)
            ? err.error.message.join('\n')
            : err.error.message;
        }
        this.toastService.showError(errorMessage);
        this.isSubmitting = false;
      },
    });
  }
}
