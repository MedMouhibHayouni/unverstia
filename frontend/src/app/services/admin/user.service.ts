import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environement';
import { Admin, CreateUserDto, IndustrialTutor, UpdateUserDto, UserResponseDto } from '../../models/user.model';
import { Student } from '../../models/student.model';
import { Teacher } from '../../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  // General User Methods
  getCurrentUser(): Observable<UserResponseDto> {
    return this.http.get<UserResponseDto>(`${this.apiUrl}/me`);
  }

  getAllUsers(): Observable<UserResponseDto[]> {
    return this.http.get<UserResponseDto[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<UserResponseDto> {
    return this.http.get<UserResponseDto>(`${this.apiUrl}/${id}`);
  }

  createUser(userData: CreateUserDto): Observable<UserResponseDto> {
    return this.http.post<UserResponseDto>(this.apiUrl, userData);
  }

  updateUser(id: number, userData: UpdateUserDto): Observable<UserResponseDto> {
    return this.http.patch<UserResponseDto>(`${this.apiUrl}/${id}`, userData);
  }

  deactivateUser(id: number): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}/deactivate`, {});
  }

  // Role-Specific Methods
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/students`);
  }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.apiUrl}/teachers`);
  }

  getIndustrialTutors(): Observable<IndustrialTutor[]> {
    return this.http.get<IndustrialTutor[]>(`${this.apiUrl}/industrial-tutors`);
  }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.apiUrl}/admins`);
  }

  getAvailableSupervisors(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.apiUrl}/teachers/available`);
  }

  // User Management
  uploadProfilePicture(userId: number, file: File): Observable<UserResponseDto> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<UserResponseDto>(`${this.apiUrl}/${userId}/profile-picture`, formData);
  }

  updatePassword(userId: number, currentPassword: string, newPassword: string): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${userId}/password`, {
      currentPassword,
      newPassword
    });
  }

  resetPassword(email: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/reset-password`, { email });
  }

  // Signature Management
  uploadSignature(userId: number, signatureFile: File): Observable<UserResponseDto> {
    const formData = new FormData();
    formData.append('signature', signatureFile);
    return this.http.post<UserResponseDto>(`${this.apiUrl}/${userId}/signature`, formData);
  }

  // Search and Filter
  searchUsers(query: string): Observable<UserResponseDto[]> {
    return this.http.get<UserResponseDto[]>(`${this.apiUrl}/search?q=${query}`);
  }

  filterUsers(params: any): Observable<UserResponseDto[]> {
    return this.http.get<UserResponseDto[]>(`${this.apiUrl}/filter`, { params });
  }

  deleteUser(userId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${userId}`);
}
}
