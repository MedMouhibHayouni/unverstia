import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AuthService } from '../../../../services/auth.service';
import { PositionType, RoleType } from '../../../../core/enum/Role&PositionType.enum';

interface Task {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  dueSoon?: boolean;
  dueDate: string;
  members: { avatar: string }[];
}

interface TaskColumn {
  title: string;
  status: 'pending' | 'in_progress' | 'completed';
  tasks: Task[];
}

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('heroHeader') heroHeader!: ElementRef;
  @ViewChild('headerGlow') headerGlow!: ElementRef;
  @ViewChild('statsCards') statsCards!: ElementRef;
  @ViewChild('timelineCard') timelineCard!: ElementRef;
  @ViewChild('tasksCard') tasksCard!: ElementRef;
  @ViewChild('roleCard') roleCard!: ElementRef;
  @ViewChild('activityCard') activityCard!: ElementRef;

  user: any;
  particles: any[] = [];



  // Task board data
  taskColumns: TaskColumn[] = [
  {
    title: 'En Attente',
    status: 'pending',
    tasks: [
      {
        title: 'Rapport hebdomadaire',
        description: 'Soumettre le rapport de progression',
        priority: 'high',
        dueSoon: true,
        dueDate: 'Aujourd\'hui',
        members: [
          { avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
          { avatar: 'https://randomuser.me/api/portraits/men/32.jpg' }
        ]
      },
        {
          title: 'Réunion d\'équipe',
          description: 'Préparer l\'ordre du jour',
          priority: 'medium',
          dueDate: 'Demain',
          members: [
            { avatar: 'https://randomuser.me/api/portraits/men/75.jpg' }
          ]
        }
      ]
    },
    {
      title: 'En Cours',
      status: 'in_progress',
      tasks: [
        {
          title: 'Développement API',
          description: 'Implémenter les endpoints REST',
          priority: 'high',
          dueDate: '15/06',
          members: [
            { avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
            { avatar: 'https://randomuser.me/api/portraits/men/22.jpg' }
          ]
        }
      ]
    },
    {
      title: 'Terminé',
      status: 'completed',
      tasks: [
        {
          title: 'Conception UI',
          description: 'Maquettes Figma finalisées',
          priority: 'low',
          dueDate: '05/06',
          members: [
            { avatar: 'https://randomuser.me/api/portraits/women/33.jpg' }
          ]
        }
      ]
    }
  ];

  recentActivities = [
    {
      type: 'success',
      icon: 'fas fa-check-circle',
      title: 'PFE validé',
      description: 'Votre projet "Système de recommandation IA" a été approuvé',
      time: 'Il y a 2 heures',
      action: 'Voir'
    },
    {
      type: 'system',
      icon: 'fas fa-envelope',
      title: 'Nouveau message',
      description: 'De la part de votre encadrant universitaire',
      time: 'Il y a 5 heures',
      action: 'Ouvrir'
    },
    {
      type: 'warning',
      icon: 'fas fa-exclamation-triangle',
      title: 'Échéance approche',
      description: 'Rapport intermédiaire à soumettre demain',
      time: 'Il y a 1 jour',
      action: 'Rappel'
    }
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.createParticles();
  }

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  createParticles(): void {
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        style: {
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 10 + 10}s`
        }
      });
    }
  }

  initAnimations(): void {
    // Header animation
    gsap.from(this.heroHeader.nativeElement, {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.to(this.headerGlow.nativeElement, {
      opacity: 1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Stats cards animation
    gsap.from(this.statsCards.nativeElement.children, {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: this.statsCards.nativeElement,
        start: "top 80%"
      }
    });

    // Cards animations
    const cards = [
      { element: this.timelineCard, x: -30 },
      { element: this.tasksCard, y: 30 },
      { element: this.roleCard, x: 30 },
      { element: this.activityCard, y: 30 }
    ];

    cards.forEach(card => {
      gsap.from(card.element.nativeElement, {
        x: card.x || 0,
        y: card.y || 0,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card.element.nativeElement,
          start: "top 75%"
        }
      });
    });

    // Floating animation for stats cards
    gsap.to(this.statsCards.nativeElement.children, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.1
    });
  }

  // Role-specific methods
  getUserRoleLabel(role: string): string {
    switch(role) {
      case RoleType.ADMIN: return 'Administrateur';
      case RoleType.STUDENT: return 'Étudiant';
      case RoleType.TEACHER: return 'Enseignant';
      case RoleType.INDUSTRIAL_TUTOR: return 'Tuteur Industriel';
      default: return 'Utilisateur';
    }
  }

  getUserPositionLabel(position: string): string {
    switch(position) {
      case PositionType.ASSISTANT_PROF: return 'Professeur Assistant';
      case PositionType.PROFESSOR: return 'Professeur';
      case PositionType.DEPARTMENT_HEAD: return 'Chef de Département';
      case PositionType.HEADMASTER: return 'Directeur';
      default: return position;
    }
  }

  getRoleSpecificStats(): any[] {
    const baseStats = [
      { title: 'PFE En Cours', value: 4, progress: 40 },
      { title: 'Tâches en Attente', value: 3, action: 'Voir' }
    ];

    if (this.user?.role === RoleType.STUDENT) {
      return [
        ...baseStats,
        { title: 'Projets Actifs', value: 1, footer: 'Dernier soumis: 2 jours' },
        { title: 'Documents à Signer', value: 2, action: 'Signer' }
      ];
    } else if (this.user?.role === RoleType.TEACHER) {
      return [
        ...baseStats,
        { title: 'Étudiants Encadrés', value: 8, footer: '+2 cette année' },
        { title: 'Réunions Cette Semaine', value: 3, action: 'Calendrier' }
      ];
    } else if (this.user?.role === RoleType.INDUSTRIAL_TUTOR) {
      return [
        ...baseStats,
        { title: 'Stages Supervisés', value: 5, footer: '2 en entreprise' },
        { title: 'Évaluations en Attente', value: 1, action: 'Évaluer' }
      ];
    } else if (this.user?.role === RoleType.ADMIN) {
      return [
        { title: 'Utilisateurs', value: 124, progress: 75 },
        { title: 'PFE Cette Année', value: 42, footer: '+12% vs 2024' },
        { title: 'Stages Validés', value: 28, action: 'Voir' },
        { title: 'Documents en Attente', value: 7, action: 'Approuver' }
      ];
    }

    return baseStats;
  }

  getTimelineTitle(): string {
    switch(this.user?.role) {
      case RoleType.STUDENT: return 'Mon Progression PFE';
      case RoleType.TEACHER: return 'Progression des Étudiants';
      case RoleType.INDUSTRIAL_TUTOR: return 'Progression des Stagiaires';
      case RoleType.ADMIN: return 'Activité Récente du Système';
      default: return 'Progression';
    }
  }

  getTimelineItems(): any[] {
    const studentItems = [
      { icon: 'fas fa-file-upload', title: 'Proposition Soumise', description: 'Votre proposition de PFE a été soumise avec succès', date: '15 Avril 2025' },
      { icon: 'fas fa-user-tie', title: 'Encadrant Assigné', description: 'Dr. Ahmed a été assigné comme encadrant', date: '20 Avril 2025' },
      { icon: 'fas fa-code', title: 'Phase de Développement', description: 'Implémentation du système en cours', date: 'En cours' },
      { icon: 'fas fa-file-alt', title: 'Rapport Final', description: 'Date limite de soumission du rapport', date: '15 Juin 2025' }
    ];

    const teacherItems = [
      { icon: 'fas fa-users', title: 'Nouveaux Étudiants', description: '5 nouveaux étudiants assignés', date: '1 Septembre 2024' },
      { icon: 'fas fa-calendar-check', title: 'Planification Réunions', description: 'Réunions de suivi planifiées', date: '15 Septembre 2024' },
      { icon: 'fas fa-chart-line', title: 'Évaluations Intermédiaires', description: 'Progrès satisfaisants pour 80%', date: '15 Janvier 2025' },
      { icon: 'fas fa-graduation-cap', title: 'Préparation Soutenances', description: 'Planification des soutenances', date: 'Juin 2025' }
    ];

    switch(this.user?.role) {
      case RoleType.STUDENT: return studentItems;
      case RoleType.TEACHER: return teacherItems;
      case RoleType.INDUSTRIAL_TUTOR:
        return [
          { icon: 'fas fa-building', title: 'Accueil Stagiaires', description: '2 nouveaux stagiaires accueillis', date: '1 Juin 2025' },
          { icon: 'fas fa-tasks', title: 'Plan de Travail', description: 'Plan de travail établi', date: '5 Juin 2025' },
          { icon: 'fas fa-chart-pie', title: 'Évaluation Intermédiaire', description: 'Rapport intermédiaire à soumettre', date: '15 Juillet 2025' }
        ];
      case RoleType.ADMIN:
        return [
          { icon: 'fas fa-server', title: 'Mise à Jour Système', description: 'Nouvelle version déployée', date: '1 Juin 2025' },
          { icon: 'fas fa-user-plus', title: 'Nouveaux Utilisateurs', description: '12 nouveaux comptes créés', date: '3 Juin 2025' },
          { icon: 'fas fa-shield-alt', title: 'Audit de Sécurité', description: 'Audit planifié pour Juillet', date: '1 Juillet 2025' }
        ];
      default: return studentItems;
    }
  }

  getQuickActions(): any[] {
    const commonActions = [
      { icon: 'fas fa-calendar-alt', title: 'Calendrier', description: 'Voir votre calendrier', action: 'calendar' },
      { icon: 'fas fa-file-download', title: 'Documents', description: 'Télécharger des modèles', action: 'documents' }
    ];

    switch(this.user?.role) {
      case RoleType.STUDENT:
        return [
          { icon: 'fas fa-project-diagram', title: 'Mon PFE', description: 'Gérer votre projet', action: 'pfe' },
          ...commonActions,
          { icon: 'fas fa-question-circle', title: 'Support', description: 'Contacter un encadrant', action: 'support' }
        ];
      case RoleType.TEACHER:
        return [
          { icon: 'fas fa-user-graduate', title: 'Mes Étudiants', description: 'Voir la liste des étudiants', action: 'students' },
          ...commonActions,
          { icon: 'fas fa-chart-bar', title: 'Statistiques', description: 'Voir les statistiques', action: 'stats' }
        ];
      case RoleType.INDUSTRIAL_TUTOR:
        return [
          { icon: 'fas fa-briefcase', title: 'Stagiaires', description: 'Gérer les stagiaires', action: 'interns' },
          ...commonActions,
          { icon: 'fas fa-file-signature', title: 'Évaluations', description: 'Remplir les évaluations', action: 'evaluations' }
        ];
      case RoleType.ADMIN:
        return [
          { icon: 'fas fa-users-cog', title: 'Utilisateurs', description: 'Gérer les comptes', action: 'users' },
          { icon: 'fas fa-cog', title: 'Paramètres', description: 'Configurer le système', action: 'settings' },
          { icon: 'fas fa-database', title: 'Backup', description: 'Sauvegarder les données', action: 'backup' }
        ];
      default: return commonActions;
    }
  }

  handleQuickAction(action: string): void {
    // Implement action handling based on user role
    console.log(`Action triggered: ${action} for ${this.user?.role}`);
  }

  // Task board methods
drop(event: CdkDragDrop<Task[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
}
