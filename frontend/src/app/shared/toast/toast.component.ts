// src/app/components/toast/toast.component.ts
import { Component, Input } from '@angular/core';
import { Toast } from '../../models/toast.model';
import { gsap } from 'gsap';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() toast!: Toast;

  ngOnInit(): void {
    this.animateIn();
  }

  private animateIn(): void {
    gsap.from('.toast-entrance', {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  }

  animateOut(): void {
    gsap.to('.toast-entrance', {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "back.in(1.7)"
    });
  }
}
