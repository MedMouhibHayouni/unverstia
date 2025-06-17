import { Pfe } from '../entities/pfe.entity';
import { PfeResponseDto } from '../dto/pfe-response.dto';

export class PfeResponseMapper {
  static toDto(pfe: Pfe): PfeResponseDto {
    return {
      id: pfe.id,
      title: pfe.title,
      description: pfe.description,
      status: pfe.status,
      submission_date: pfe.submission_date
        ? this.formatDate(pfe.submission_date)
        : undefined,
      defense_date: pfe.defense_date
        ? this.formatDate(pfe.defense_date)
        : undefined,

      // Ensure this matches StudentDto exactly
      student: {
        user_id: pfe.student.user_id,
        first_name: pfe.student.user.first_name,
        last_name: pfe.student.user.last_name,
        email: pfe.student.user.email,
        student_id: pfe.student.student_id,
        level: pfe.student.level,
        profile_picture: pfe.student.user.profile_picture,
      },

      supervisor: pfe.supervisor
        ? {
            user_id: pfe.supervisor.user_id,
            first_name: pfe.supervisor.user.first_name,
            last_name: pfe.supervisor.user.last_name,
            email: pfe.supervisor.user.email,
            profile_picture: pfe.supervisor.user.profile_picture,
            position: pfe.supervisor.position,
          }
        : undefined,

      /*documents: pfe.documents?.map((doc) => ({
        id: doc.id,
        type: doc.type,
        file_url: doc.file_url,
      })),

      /*evaluations: pfe.evaluations?.map((pfeEval) => ({
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
