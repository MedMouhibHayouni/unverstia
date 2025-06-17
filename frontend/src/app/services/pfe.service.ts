import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environement';
import {
  CreatePfeDto,
  EvaluatePfeDto,
  PfeResponseDto,
  SubmitDocumentDto,
} from '../modules/dashboard/pages/pfe/pfe-dto.model';
import { Pfe } from '../models/pfe/pfe.model';
import { PfeDocument } from '../models/pfe/pfe-document.model';
import { PfeEvaluation } from '../models/pfe/pfe-evaluation.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PfeService {
  private apiUrl = `${environment.apiUrl}/pfe`;

  constructor(private http: HttpClient) {}

  // CRUD Operations
create(dto: CreatePfeDto): Observable<Pfe> {
  // Ensure dates are properly formatted
  const payload = {
    ...dto,
    submission_date: dto.submission_date
      ? new Date(dto.submission_date).toISOString().split('T')[0]
      : null,
    defense_date: dto.defense_date
      ? new Date(dto.defense_date).toISOString().split('T')[0]
      : null
  };

  console.log('Sending payload:', payload);
  return this.http.post<Pfe>(this.apiUrl, payload);
}

private formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
  getAll() {
    return this.http.get<Pfe[]>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get<Pfe>(`${this.apiUrl}/${id}`);
  }

  update(id: number, dto: Partial<CreatePfeDto>) {
    return this.http.put<Pfe>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Status Actions
  approve(id: number) {
    return this.http.post(`${this.apiUrl}/${id}/approve`, {});
  }

  reject(id: number) {
    return this.http.post(`${this.apiUrl}/${id}/reject`, {});
  }

  scheduleDefense(id: number, date: Date) {
    return this.http.post(`${this.apiUrl}/${id}/schedule-defense`, {
      defense_date: date,
    });
  }

  uploadDocument(formData: FormData) {
    return this.http.post(`${this.apiUrl}/document`, formData);
  }

  getDocuments(pfe_id: number) {
    return this.http.get<PfeDocument[]>(`${this.apiUrl}/${pfe_id}/documents`);
  }

  deleteDocument(docId: number) {
    return this.http.delete(`${this.apiUrl}/document/${docId}`);
  }

  // Evaluations
  evaluate(dto: EvaluatePfeDto) {
    return this.http.post(`${this.apiUrl}/evaluate`, dto);
  }

  getEvaluations(pfe_id: number) {
    return this.http.get<PfeEvaluation[]>(
      `${this.apiUrl}/${pfe_id}/evaluations`
    );
  }

  // Supervision - New Method
  getSupervisedPfes(supervisorId: number): Observable<Pfe[]> {
    return this.http.get<Pfe[]>(`${this.apiUrl}/supervisor/${supervisorId}`);
  }

  getPfeById(id: number): Observable<Pfe> {
    return this.http.get<Pfe>(`${this.apiUrl}/${id}`);
  }
}
