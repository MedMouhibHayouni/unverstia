import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Optional: AuthGuard to redirect authenticated users from '/' or '/auth' to dashboard

const routes: Routes = [
  // Auth Module (Login, Register, etc.)
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },

  // Dashboard Module (Lazy-loaded, protected inside its own module with AuthGuard)
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  // Redirect to auth or dashboard depending on user authentication state
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/login' // Optional: You can use a guard here instead
    // canActivate: [AutoRedirectGuard]
  },

  // Wildcard – if route doesn't match, redirect to login (or 404 page)
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
