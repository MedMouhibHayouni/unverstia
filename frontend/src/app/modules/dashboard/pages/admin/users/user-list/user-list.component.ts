import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { UserService } from '../../../../../../services/admin/user.service';
import { User } from '../../../../../../models/user.model';
import { RoleType } from '../../../../../../core/enum/Role&PositionType.enum';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('300ms ease-out', style({ opacity: 1, height: '*' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, height: 0 }))
      ])
    ])
  ]
})
export class UserListComponent implements OnInit, AfterViewInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  paginatedUsers: User[] = [];
  searchTerm = '';
  isLoading = true;
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;

  // Advanced Filters
  showAdvancedFilters = false;
  selectedRole = '';
  selectedStatus = '';
  startDate = '';
  endDate = '';

  // Sorting
  sortColumn = 'first_name';
  sortDirection = 'asc';

  // Delete Modal
  showDeleteModal = false;
  selectedUser: User | null = null;

  // Available roles from enum
  roles = Object.values(RoleType);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit(): void {
    this.initTooltips();
  }

  loadUsers(): void {
  this.isLoading = true;
  console.log('Starting to load users...'); // Debug log
  this.userService.getAllUsers().subscribe({
    next: (users) => {
      console.log('Users received:', users); // Inspect the actual data
      this.users = users;
      this.filteredUsers = [...users];
      this.paginatedUsers = this.getPaginatedUsers(); // Add this line
      this.isLoading = false;
      console.log('Users assigned:', this.users); // Verify assignment
      this.animateTableRows();
    },
    error: (err) => {
      console.error('Error loading users:', err);
      this.isLoading = false;
    }
  });
}

private getPaginatedUsers(): User[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  return this.filteredUsers.slice(startIndex, startIndex + this.itemsPerPage);
}

  animateTableRows(): void {
    gsap.from('.user-row', {
      opacity: 0,
      y: 20,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power2.out',
      delay: 0.2
    });
  }

  initTooltips(): void {
    // Initialize any tooltip libraries if needed
    // For example, if using a library like tippy.js
  }

  toggleAdvancedFilters(): void {
    this.showAdvancedFilters = !this.showAdvancedFilters;
  }

  filterUsers(): void {
    let result = [...this.users];

    // Apply search term filter
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(user =>
        user.first_name.toLowerCase().includes(term) ||
        user.last_name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.phone?.toLowerCase().includes(term) ||
        user.role.toLowerCase().includes(term)
      );
    }

    // Apply role filter
    if (this.selectedRole) {
      result = result.filter(user => user.role === this.selectedRole);
    }

    // Apply status filter
    if (this.selectedStatus !== '') {
      const status = this.selectedStatus === 'true';
      result = result.filter(user => user.is_active === status);
    }

    // Apply date range filter
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      result = result.filter(user => {
        const userDate = new Date(user.created_at || '');
        return userDate >= start && userDate <= end;
      });
    }

    // Apply sorting
    result.sort((a, b) => {
      const valA = this.sortColumn === 'is_active' ? a.is_active : a[this.sortColumn as keyof User];
      const valB = this.sortColumn === 'is_active' ? b.is_active : b[this.sortColumn as keyof User];

      if (valA == null && valB == null) return 0;
      if (valA == null) return this.sortDirection === 'asc' ? 1 : -1;
      if (valB == null) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    this.filteredUsers = result;
    this.totalPages = Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    this.updatePaginatedUsers();
  }

  sortBy(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.filterUsers();
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedRole = '';
    this.selectedStatus = '';
    this.startDate = '';
    this.endDate = '';
    this.sortColumn = 'first_name';
    this.sortDirection = 'asc';
    this.filterUsers();
  }

  updatePaginatedUsers(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedUsers = this.filteredUsers.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedUsers();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedUsers();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedUsers();
    }
  }

  getPaginationPages(): number[] {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  getRoleBadgeClass(role: RoleType): string {
    const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

    switch (role) {
      case RoleType.ADMIN:
        return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200`;
      case RoleType.STUDENT:
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`;
      case RoleType.TEACHER:
        return `${baseClasses} bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200`;
      case RoleType.INDUSTRIAL_TUTOR:
        return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300`;
    }
  }

  toggleUserStatus(user: User): void {
    user.is_active = !user.is_active;
    this.userService.updateUser(user.id, user).subscribe({
      next: () => {
        this.filterUsers();
      },
      error: (err) => {
        console.error('Error updating user status:', err);
        user.is_active = !user.is_active; // Revert on error
      }
    });
  }

  openDeleteModal(user: User): void {
    this.selectedUser = user;
    this.showDeleteModal = true;
  }

  confirmDelete(): void {
    if (!this.selectedUser) return;

    this.userService.deleteUser(this.selectedUser.id).subscribe({
      next: () => {
        this.showDeleteModal = false;
        this.loadUsers(); // Refresh the list
      },
      error: (err) => {
        console.error('Error deleting user:', err);
        this.showDeleteModal = false;
      }
    });
  }

  // Add this to your component class
getMinPageItem(): number {
  return Math.min(this.currentPage * this.itemsPerPage, this.filteredUsers.length);
}

getStartIndex(): number {
  return (this.currentPage - 1) * this.itemsPerPage + 1;
}


}
