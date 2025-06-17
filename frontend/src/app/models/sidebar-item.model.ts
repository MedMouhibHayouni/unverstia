import { PositionType, RoleType } from "../core/enum/Role&PositionType.enum";

export interface SidebarItem {
  name: string;
  route?: string;
  icon?: string;
  roles: RoleType[];
  children?: SidebarItem[];
  positions?: PositionType[];
  requiresOTP?: boolean;
  badge?: number;
  isCollapsible?: boolean;
}
