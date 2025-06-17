// src/app/models/toast.model.ts
import { TemplateRef } from '@angular/core';

export interface Toast {
  id?: number;
  type: 'success' | 'error' | 'info' | 'warning';
  message?: string;
  template?: TemplateRef<any>;
  templateContext?: any;
  delay?: number;
}
