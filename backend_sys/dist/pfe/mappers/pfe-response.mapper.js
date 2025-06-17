"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PfeResponseMapper = void 0;
class PfeResponseMapper {
    static toDto(pfe) {
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
        };
    }
    static formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
}
exports.PfeResponseMapper = PfeResponseMapper;
//# sourceMappingURL=pfe-response.mapper.js.map