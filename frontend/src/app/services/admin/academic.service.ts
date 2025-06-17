// src/app/services/academic.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AcademicInstitution, CreateDepartmentDto, CreateInstitutionDto, Department } from '../../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {
  private apiUrl = 'http://localhost:3000'; // Adaptez selon votre URL d'API

  constructor(private http: HttpClient) { }

  // Départements
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}/departments`);
  }

  createDepartment(dto: CreateDepartmentDto): Observable<Department> {
    return this.http.post<Department>(`${this.apiUrl}/departments`, dto);
  }

  updateDepartment(id: number, dto: Partial<CreateDepartmentDto>): Observable<Department> {
    return this.http.patch<Department>(`${this.apiUrl}/departments/${id}`, dto);
  }

  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/departments/${id}`);
  }

  // Instituts
  getInstitutions(): Observable<AcademicInstitution[]> {
    return this.http.get<AcademicInstitution[]>(`${this.apiUrl}/academic-institutions`);
  }

  createInstitution(dto: CreateInstitutionDto): Observable<AcademicInstitution> {
    return this.http.post<AcademicInstitution>(`${this.apiUrl}/academic-institutions`, dto);
  }

  updateInstitution(id: number, dto: Partial<CreateInstitutionDto>): Observable<AcademicInstitution> {
    return this.http.patch<AcademicInstitution>(`${this.apiUrl}/academic-institutions/${id}`, dto);
  }

  deleteInstitution(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/academic-institutions/${id}`);
  }
}
