import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department, DegreeProgram, Company, Room } from '../models/academic.model';
import { environment } from '../environement';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {
  private apiUrl = `${environment.apiUrl}/academic`;

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}/departments`);
  }

  getDegreePrograms(): Observable<DegreeProgram[]> {
    return this.http.get<DegreeProgram[]>(`${this.apiUrl}/degree-programs`);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/companies`);
  }

  getAvailableRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/rooms/available`);
  }

  reserveRoom(reservationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/rooms/reserve`, reservationData);
  }
}
