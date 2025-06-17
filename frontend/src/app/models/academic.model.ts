import { Teacher } from "./teacher.model";

export interface Department {
  id: number;
  name: string;
  code: string;
  head?: Teacher;
}

export interface DegreeProgram {
  id: string;
  code: string;
  name: string;
  degree: 'Bachelor' | 'Master' | 'PhD';
  major: string;
  speciality: string;
  durationYears: number;
  description?: string;
}

export interface Company {
  id: number;
  name: string;
  legalName?: string;
  field: string;
  address?: Address;
  email?: string;
  phone?: string;
  website?: string;
  isActive: boolean;
}

export interface Address {
  addressDetails: string;
  zipCode: number;
  city: string;
  state: string;
  additionalDetails?: string;
}

export interface Room {
  id: number;
  name: string;
  location: string;
  capacity: number;
  isActive: boolean;
}
