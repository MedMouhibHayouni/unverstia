import { RoleType } from "../core/enum/Role&PositionType.enum";
import { Company, Department } from "./academic.model";

export interface User {
  id: number;
  profile_picture: string;
  first_name: string;
  last_name: string;
  cin: string;
  email: string;
  phone: string;
  password_hash: string;
  role: RoleType;
  created_at: Date;
  address?: Address;
  reset_token: string | null;
  reset_token_expiry: Date | null;
  last_login: Date | null;
  is_active: boolean;
}

export interface Address {
  id: number;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface IndustrialTutor extends User {
  company: Company;
  jobTitle: string;
}

export interface UpdateUserDto {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  isActive?: boolean;
  position?: string;
}

export interface UserResponseDto extends User {
  createdAt: string;
  updatedAt: string;
  profilePictureUrl?: string;
  signatureUrl?: string;
}

export interface Admin extends User {
  position: string;
  accessLevel: number;
  canManageUsers: boolean;
}

export interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: 'student' | 'teacher' | 'industrial_tutor' | 'admin';
  password: string;
  studentId?: string; // For students
  position?: string; // For teachers/admins
  companyId?: number; // For industrial tutors
}


export interface Teacher extends User {
  title?: string;
  position: 'Assistant_prof' | 'Professor' | 'Headmaster';
  department: Department;
  officeLocation?: string;
  specializations: string[];
}
