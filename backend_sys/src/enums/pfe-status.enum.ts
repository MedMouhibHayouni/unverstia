export enum PfeStatus {
  PROPOSED = 'PROPOSÉ', // Proposition soumise
  APPROVED = 'APPROUVÉ', // Validé par l'encadrant
  REJECTED = 'REJETÉ', // Rejeté par l'encadrant
  IN_PROGRESS = 'EN_COURS', // En cours de réalisation
  DOCUMENTS_SUBMITTED = 'DOCUMENTS_DÉPOSÉS', // Rapports déposés
  DEFENSE_SCHEDULED = 'SOUTENANCE_PRÉVUE', // Soutenance programmée
  DEFENSE_COMPLETED = 'SOUTENANCE_EFFECTUÉE', // Soutenance terminée
  GRADED = 'NOTÉ', // Évalué et noté
  ARCHIVED = 'ARCHIVÉ', // Archivé
}
