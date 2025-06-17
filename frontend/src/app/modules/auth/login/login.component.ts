import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  // GSAP Animation References
  @ViewChild('loginContainer') loginContainer!: ElementRef;
  @ViewChild('header') header!: ElementRef;
  @ViewChild('formElement') formElement!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('passwordField') passwordField!: ElementRef;
  @ViewChild('submitButton') submitButton!: ElementRef;
  @ViewChild('submitButtonContainer') submitButtonContainer!: ElementRef;
  @ViewChild('footer') footer!: ElementRef;
  @ViewChild('errorContainer') errorContainer!: ElementRef;
  @ViewChild('errorMessageElement') errorMessageElement!: ElementRef;
  @ViewChild('emailError') emailError!: ElementRef;
  @ViewChild('passwordError') passwordError!: ElementRef;
  @ViewChild('bgCircle1') bgCircle1!: ElementRef;
  @ViewChild('bgCircle2') bgCircle2!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Register custom GSAP ease
    gsap.registerPlugin(CustomEase);
    CustomEase.create("smooth", "0.65, 0, 0.35, 1");
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    // Initialize any component logic here
  }

  ngAfterViewInit(): void {
    this.animateEntrance();
  }

  animateEntrance(): void {
    // Set initial state for all elements
    gsap.set([
      this.header.nativeElement,
      this.emailField.nativeElement,
      this.passwordField.nativeElement,
      this.submitButtonContainer.nativeElement,
      this.footer.nativeElement
    ], { opacity: 1 }); // Ensure elements are visible initially

    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "smooth" } });

    tl.from(this.loginContainer.nativeElement, {
      scale: 0.95,
      opacity: 0,
      duration: 1.2
    })
    .from(this.bgCircle1.nativeElement, {
      x: -50,
      y: -50,
      opacity: 0,
      duration: 1.5
    }, "-=1")
    .from(this.bgCircle2.nativeElement, {
      x: 50,
      y: 50,
      opacity: 0,
      duration: 1.5
    }, "-=1.5")
    .from(this.header.nativeElement, {
      y: -30,
      opacity: 0
    }, "-=0.8")
    .from(this.emailField.nativeElement, {
      y: 20,
      opacity: 0
    }, "-=0.6")
    .from(this.passwordField.nativeElement, {
      y: 20,
      opacity: 0
    }, "-=0.5")
    .from(this.submitButtonContainer.nativeElement, {
      y: 20,
      opacity: 0
    }, "-=0.4")
    .from(this.footer.nativeElement, {
      y: 20,
      opacity: 0
    }, "-=0.3");
  }

  showErrorAnimation(): void {
    const tl = gsap.timeline();

    tl.to(this.errorContainer.nativeElement, {
      height: 'auto',
      duration: 0.4
    })
    .from(this.errorMessageElement.nativeElement, {
      y: -10,
      opacity: 0,
      duration: 0.3
    }, "-=0.2");
  }

  showFieldError(element: ElementRef): void {
    gsap.from(element.nativeElement, {
      keyframes: [
        { x: -5 },
        { x: 5 },
        { x: -5 },
        { x: 5 },
        { x: 0 }
      ],
      duration: 0.5,
      ease: "power1.out"
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      // Animate invalid fields
      if (this.f['email'].invalid) {
        this.showFieldError(this.emailError);
      }
      if (this.f['password'].invalid) {
        this.showFieldError(this.passwordError);
      }
      return;
    }

    this.isLoading = true;
    const { email, password } = this.loginForm.value;

    // Animate button loading state
    gsap.to(this.submitButton.nativeElement, {
      scale: 0.98,
      duration: 0.2
    });

    this.authService.login(email, password).subscribe({
      next: (response) => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('user', JSON.stringify(response));

        // Animate success before navigation
        gsap.to(this.loginContainer.nativeElement, {
          scale: 1.05,
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
          onComplete: () => {
            this.router.navigate(['/dashboard/home']);
          }
        });
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Identifiants incorrects';
        this.isLoading = false;

        // Reset button animation
        gsap.to(this.submitButton.nativeElement, {
          scale: 1,
          duration: 0.3
        });

        // Show error animation
        this.showErrorAnimation();
      },
    });
  }
}
