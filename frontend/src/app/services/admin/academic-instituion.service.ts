// src/app/services/academic-institution.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AcademicInstitution } from '../../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class AcademicInstitutionService {
  private apiUrl = 'http://localhost:3000/academic-institutions'; // Adjust based on your API URL

  constructor(private http: HttpClient) { }

  getAllInstitutions(): Observable<AcademicInstitution[]> {
    return this.http.get<AcademicInstitution[]>(this.apiUrl);
  }

  getInstitutionById(id: number): Observable<AcademicInstitution> {
    return this.http.get<AcademicInstitution>(`${this.apiUrl}/${id}`);
  }
}
