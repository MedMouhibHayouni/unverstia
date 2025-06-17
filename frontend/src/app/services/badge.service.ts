import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  private counts = new BehaviorSubject<{[key: string]: number}>({});

  // Observable that components can subscribe to
  counts$ = this.counts.asObservable();

  // Update badge count for a specific route
  updateCount(route: string, count: number): void {
    const currentCounts = this.counts.value;
    this.counts.next({...currentCounts, [route]: count});
  }

  // Increment badge count for a route
  increment(route: string): void {
    const currentCounts = this.counts.value;
    const currentCount = currentCounts[route] || 0;
    this.updateCount(route, currentCount + 1);
  }

  // Decrement badge count for a route
  decrement(route: string): void {
    const currentCounts = this.counts.value;
    const currentCount = currentCounts[route] || 0;
    this.updateCount(route, Math.max(0, currentCount - 1));
  }

  // Reset badge count for a route
  reset(route: string): void {
    this.updateCount(route, 0);
  }

  // Get current count for a route
  getCount(route: string): number {
    return this.counts.value[route] || 0;
  }
}
