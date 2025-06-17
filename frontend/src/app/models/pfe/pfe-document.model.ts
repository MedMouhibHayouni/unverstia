import { Pfe } from "./pfe.model";
import { User } from "../user.model";


export interface PfeDocument {
  id: number;
  pfe_id: number;
  file_url: string;
  type: DocumentType;
  uploaded_at: Date;
  uploaded_by: User;
  pfe?: Pfe;
}
