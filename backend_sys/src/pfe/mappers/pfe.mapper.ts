import { PfeResponseDto } from '../dto/pfe-response.dto';
import { Pfe } from '../entities/pfe.entity';
import { format } from 'date-fns'; // Add date-fns for date formatting

export class PfeMapper {
  static toDto(pfe: Pfe): PfeResponseDto {
    return {
      id: pfe.id,
      title: pfe.title,
      description: pfe.description,
      status: pfe.status,
      submission_date: pfe.submission_date
        ? format(new Date(pfe.submission_date), 'dd/MM/yyyy')
        : undefined,
      defense_date: pfe.defense_date
        ? format(new Date(pfe.defense_date), 'dd/MM/yyyy')
        : undefined,

      // Safely map student
      student: pfe.student
        ? {
            user_id: pfe.student.user_id,
            first_name: pfe.student.user?.first_name ?? 'N/A',
            last_name: pfe.student.user?.last_name ?? 'N/A',
            email: pfe.student.user?.email ?? 'N/A',
            profile_picture: pfe.student.user?.profile_picture ?? '',
            student_id: pfe.student.student_id,
            level: pfe.student.level,
          }
        : undefined,

      // Safely map supervisor
      supervisor: pfe.supervisor
        ? {
            user_id: pfe.supervisor.user_id,
            first_name: pfe.supervisor.user?.first_name ?? 'N/A',
            last_name: pfe.supervisor.user?.last_name ?? 'N/A',
            email: pfe.supervisor.user?.email ?? 'N/A',
            profile_picture: pfe.supervisor.user?.profile_picture ?? '',
            position: pfe.supervisor.position ?? 'N/A',
          }
        : undefined,

      /*documents: pfe.documents?.map((doc) => ({
        id: doc.id,
        type: doc.type,
        file_url: doc.file_url,
      })),

      evaluations: pfe.evaluations?.map((eval) => ({
        type: eval.type,
        score: eval.score,
        feedback: eval.feedback,
      })),*/
    };
  }
  private static formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
