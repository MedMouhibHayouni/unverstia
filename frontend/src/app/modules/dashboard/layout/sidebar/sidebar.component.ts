import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { gsap } from 'gsap';
import { SidebarItem } from '../../../../models/sidebar-item.model';
import { SidebarService } from '../../../../services/sidebar.service';
import { AuthService } from '../../../../services/auth.service';
import { BadgeService } from '../../../../services/badge.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef;

  sidebarItems: SidebarItem[] = [];
  user: any;
  isCompact = false;
  expandedItems: Set<number> = new Set();
  badgeCounts: {[route: string]: number} = {};

  constructor(
    private sidebarService: SidebarService,
    private authService: AuthService,
    private badgeService: BadgeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.loadSidebarItems();
    this.setupRouterEvents();
    this.setupBadgeSubscription();
    this.checkResponsiveMode();
  }

  private loadSidebarItems(): void {
    this.sidebarItems = this.sidebarService.getSidebarItems(
      this.user.role,
      this.user.position
    );
  }

  private setupRouterEvents(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateExpandedStates();
      });
  }

  private setupBadgeSubscription(): void {
    this.badgeService.counts$.subscribe(counts => {
      this.badgeCounts = counts;
      this.highlightUrgentItems();
    });
  }

  private checkResponsiveMode(): void {
    if (window.innerWidth < 1024) {
      this.isCompact = true;
    }
  }

  private updateExpandedStates(): void {
    this.sidebarItems.forEach((item, index) => {
      if (item.children?.some(child => this.isActive(child))) {
        this.expandedItems.add(index);
      }
    });
  }

  private highlightUrgentItems(): void {
    this.sidebarItems = this.sidebarItems.map(item => ({
      ...item,
      badge: this.badgeCounts[item.route || ''] || 0,
      children: item.children?.map(child => ({
        ...child,
        badge: this.badgeCounts[child.route || ''] || 0
      }))
    }));
  }

  toggleCompact(): void {
    this.isCompact = !this.isCompact;
    this.animateSidebar();
    if (!this.isCompact) this.updateExpandedStates();
  }

  private animateSidebar(): void {
    gsap.to(this.sidebar.nativeElement, {
      width: this.isCompact ? '5rem' : '18rem',
      duration: 0.3,
      ease: "power2.inOut"
    });
  }

  toggleChildren(index: number): void {
    if (this.isCompact) {
      this.isCompact = false;
      this.toggleCompact();
      return;
    }

    if (this.expandedItems.has(index)) {
      this.expandedItems.delete(index);
    } else {
      this.expandedItems.add(index);
    }
  }

  isExpanded(index: number): boolean {
    return this.expandedItems.has(index);
  }

  isActive(item: SidebarItem): boolean {
    return !!item.route && this.router.isActive(item.route, false);
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth < 1024 && !this.isCompact) {
      this.isCompact = true;
    }
  }
}
