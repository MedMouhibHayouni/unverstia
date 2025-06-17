import { Component, OnInit } from '@angular/core';

import { gsap } from 'gsap';
import { StudentService } from '../../../../../../services/admin/student.service';
import { LevelType, Student } from '../../../../../../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  filteredStudents: Student[] = [];
  searchTerm = '';
  isLoading = true;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
    this.initAnimations();
  }

  private initAnimations(): void {
    gsap.from('.student-row', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      delay: 0.3
    });
  }

  loadStudents(): void {
    this.studentService.getAllStudents().subscribe({
      next: (students) => {
        this.students = students;
        this.filteredStudents = [...students];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading students:', err);
        this.isLoading = false;
      }
    });
  }

  filterStudents(): void {
    if (!this.searchTerm) {
      this.filteredStudents = [...this.students];
      return;
    }

    this.filteredStudents = this.students.filter(student =>
      student.user.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      student.user.last_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      student.student_id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      student.level.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getLevelBadgeClass(level: LevelType): string {
    switch (level) {
      case LevelType.FIRST: return 'bg-blue-100 text-blue-800';
      case LevelType.SECOND: return 'bg-green-100 text-green-800';
      case LevelType.THIRD: return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
}
