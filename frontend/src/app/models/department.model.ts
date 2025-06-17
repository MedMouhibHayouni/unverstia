// src/app/models/department.model.ts

export interface Department {
  id: number;
  name: string;
  code: string;
  academicInstitution?: AcademicInstitution;
  majors?: Major[];
  majorsCount?: number;  // Add this optional property

}

export interface AcademicInstitution {
  id: number;
  name: string;
  university: string;
  phone: number;
  fax?: number;
  email: string;
  director: string;
  logo_url?: string;
  address?: Address;
  departmentsCount?: number; // Number of departments in this institution

}

export interface Address {
  // Define based on your Address entity
  id: number;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Major {
  // Define based on your Major entity
  id: number;
  name: string;
  code: string;
}

export interface CreateDepartmentDto {
  name: string;
  code: string;
  academicInstitutionId?: number;
}

export interface UpdateDepartmentDto {
  name?: string;
  code?: string;
  academicInstitutionId?: number;
}

export interface CreateInstitutionDto {
  name: string;
  university: string;
  phone: string;
  email: string;
  director: string;
}
