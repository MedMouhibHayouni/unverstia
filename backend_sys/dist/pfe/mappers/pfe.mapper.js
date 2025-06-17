"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PfeMapper = void 0;
const date_fns_1 = require("date-fns");
class PfeMapper {
    static toDto(pfe) {
        return {
            id: pfe.id,
            title: pfe.title,
            description: pfe.description,
            status: pfe.status,
            submission_date: pfe.submission_date
                ? (0, date_fns_1.format)(new Date(pfe.submission_date), 'dd/MM/yyyy')
                : undefined,
            defense_date: pfe.defense_date
                ? (0, date_fns_1.format)(new Date(pfe.defense_date), 'dd/MM/yyyy')
                : undefined,
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
        };
    }
    static formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
}
exports.PfeMapper = PfeMapper;
//# sourceMappingURL=pfe.mapper.js.map