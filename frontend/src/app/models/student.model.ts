import { User } from "./user.model";

export enum SexType {
  MALE = 'male',
  FEMALE = 'female'
}

export enum LevelType {
  FIRST = '1ére année',
  SECOND = '2éme année',
  THIRD = '3éme année'
}

export interface DegreeProgram {
  id: number;
  name: string;
}

export interface Student {
  user_id: number;
  user: User;
  sex: SexType | null;
  student_id: string;
  degree: DegreeProgram;
  level: LevelType;
}
