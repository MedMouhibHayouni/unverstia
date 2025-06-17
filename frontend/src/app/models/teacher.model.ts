import { PositionType } from "../core/enum/Role&PositionType.enum";
import { Department } from "./academic.model";
import { User } from "./user.model";

export interface Teacher {
  id: number;
  user_id: number;
  user: User;
  position: PositionType;
  department_id?: number;  // Include if you use this
  department?: Department;

}
