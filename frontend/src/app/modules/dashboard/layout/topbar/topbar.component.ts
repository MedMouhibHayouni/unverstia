import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../../../services/auth.service';
import { SidebarService } from '../../../../services/sidebar.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  user: any;
  title = 'Dashboard';
  breadcrumbs: { label: string, url: string }[] = [];
  showNotifications = false;
  showUserMenu = false;
  unreadNotifications = 3;
  isDarkMode = false;

  notifications = [
    {
      icon: 'fas fa-file-alt text-indigo-500',
      message: 'Your PFE proposal has been approved',
      time: '2 hours ago',
      read: false
    },
    {
      icon: 'fas fa-calendar-check text-green-500',
      message: 'Defense scheduled for June 15th',
      time: '1 day ago',
      read: false
    },
    {
      icon: 'fas fa-comment-alt text-purple-500',
      message: 'New feedback from your supervisor',
      time: '3 days ago',
      read: true
    }
  ];

  constructor(
    private authService: AuthService,
    private sidebarService: SidebarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.checkDarkMode();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumbs();
      });

    this.updateBreadcrumbs();
  }

  checkDarkMode(): void {
    this.isDarkMode = document.documentElement.classList.contains('dark');
    this.updateThemeIcon();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    this.updateThemeIcon();
  }

  updateThemeIcon(): void {
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    if (this.isDarkMode) {
      moonIcon?.classList.add('hidden');
      sunIcon?.classList.remove('hidden');
    } else {
      moonIcon?.classList.remove('hidden');
      sunIcon?.classList.add('hidden');
    }
  }

  updateBreadcrumbs(): void {
    const url = this.router.url;
    const segments = url.split('/').filter(segment => segment);

    this.breadcrumbs = segments.map((segment, index) => {
      const url = `/${segments.slice(0, index + 1).join('/')}`;
      return {
        label: segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        url: url
      };
    });

    if (this.breadcrumbs.length > 0) {
      this.title = this.breadcrumbs[this.breadcrumbs.length - 1].label;
    }
  }

  toggleSidebar(): void {
    //this.sidebarService.toggleCompact();
  }

  // Toggle notifications dropdown
  toggleNotifications(event: MouseEvent): void {
    event.stopPropagation();
    this.showUserMenu = false;
    this.showNotifications = !this.showNotifications;
  }

    // Toggle user menu dropdown
  toggleUserMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.showNotifications = false;
    this.showUserMenu = !this.showUserMenu;
  }

  markAllAsRead(): void {
    this.unreadNotifications = 0;
    this.notifications.forEach(n => n.read = true);
    this.showNotifications = false;
  }

  logout(): void {
    this.authService.logout();
  }

  // Close both dropdowns when clicking anywhere else
  @HostListener('document:click')
  closeDropdowns(): void {
    this.showNotifications = false;
    this.showUserMenu = false;
  }

   // Prevent dropdown from closing when clicking inside
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.notification-dropdown') && !target.closest('.notification-btn')) {
      this.showNotifications = false;
    }
    if (!target.closest('.user-dropdown') && !target.closest('.user-btn')) {
      this.showUserMenu = false;
    }
  }

}
