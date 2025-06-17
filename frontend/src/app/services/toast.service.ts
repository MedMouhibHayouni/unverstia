// src/app/services/toast.service.ts

import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from '../models/toast.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: Toast[] = [];
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.toastsSubject.asObservable();

  private nextId = 0;

  show(toast: Toast): void {
    toast.id = ++this.nextId;
    this.toasts.push(toast);
    this.toastsSubject.next([...this.toasts]);

    const delay = toast.delay || (toast.type === 'error' ? 5000 : 3000);
    setTimeout(() => this.remove(toast.id!), delay);
  }

  showSuccess(message: string, delay?: number): void {
    this.show({ type: 'success', message, delay });
  }

  showError(message: string, delay?: number): void {
    this.show({ type: 'error', message, delay: delay || 5000 });
  }

  showInfo(message: string, delay?: number): void {
    this.show({ type: 'info', message, delay });
  }

  showWarning(message: string, delay?: number): void {
    this.show({ type: 'warning', message, delay });
  }

  remove(id: number): void {
    this.toasts = this.toasts.filter(t => t.id !== id);
    this.toastsSubject.next([...this.toasts]);
  }

  clear(): void {
    this.toasts = [];
    this.toastsSubject.next([]);
  }
}
