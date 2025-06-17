"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PfeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pfe_entity_1 = require("./entities/pfe.entity");
const pfe_mapper_1 = require("./mappers/pfe.mapper");
const pfe_status_enum_1 = require("../enums/pfe-status.enum");
const student_entity_1 = require("../students/entities/student.entity");
const teacher_entity_1 = require("../teachers/entities/teacher.entity");
const date_fns_1 = require("date-fns");
let PfeService = class PfeService {
    constructor(pfeRepo, studentRepo, teacherRepo) {
        this.pfeRepo = pfeRepo;
        this.studentRepo = studentRepo;
        this.teacherRepo = teacherRepo;
    }
    async create(dto) {
        const student = await this.studentRepo.findOne({
            where: { user_id: dto.student_id },
            relations: ['user'],
        });
        if (!student)
            throw new common_1.NotFoundException('Étudiant non trouvé');
        const supervisor = dto.supervisor_id
            ? await this.teacherRepo.findOne({
                where: { user_id: dto.supervisor_id },
                relations: ['user'],
            })
            : null;
        const pfe = this.pfeRepo.create({
            title: dto.title,
            description: dto.description,
            student,
            supervisor,
            submission_date: dto.submission_date
                ? new Date(dto.submission_date)
                : null,
            defense_date: dto.defense_date ? new Date(dto.defense_date) : null,
        });
        return await this.pfeRepo.save(pfe);
    }
    async findAll() {
        const pfes = await this.pfeRepo.find({
            relations: [
                'student',
                'student.user',
                'supervisor',
                'supervisor.user',
                'documents',
                'evaluations',
            ],
        });
        return pfes.map(pfe_mapper_1.PfeMapper.toDto);
    }
    async findOne(id) {
        const pfe = await this.pfeRepo.findOne({
            where: { id },
            relations: [
                'student',
                'student.user',
                'supervisor',
                'supervisor.user',
                'documents',
                'evaluations',
            ],
        });
        if (!pfe)
            throw new common_1.NotFoundException('PFE non trouvé');
        return pfe_mapper_1.PfeMapper.toDto(pfe);
    }
    async update(id, dto) {
        const pfe = await this.pfeRepo.findOneBy({ id });
        if (!pfe)
            throw new common_1.NotFoundException('PFE non trouvé');
        Object.assign(pfe, dto);
        await this.pfeRepo.save(pfe);
        return this.findOne(id);
    }
    async delete(id) {
        await this.pfeRepo.delete(id);
    }
    async approvePfe(id) {
        const pfe = await this.pfeRepo.findOneBy({ id });
        if (!pfe)
            throw new common_1.NotFoundException('PFE non trouvé');
        pfe.status = pfe_status_enum_1.PfeStatus.APPROVED;
        await this.pfeRepo.save(pfe);
        return this.findOne(id);
    }
    async rejectPfe(id) {
        const pfe = await this.pfeRepo.findOneBy({ id });
        if (!pfe)
            throw new common_1.NotFoundException('PFE non trouvé');
        pfe.status = pfe_status_enum_1.PfeStatus.REJECTED;
        await this.pfeRepo.save(pfe);
        return this.findOne(id);
    }
    async getBySupervisor(supervisorId) {
        const pfes = await this.pfeRepo.find({
            where: { supervisor: { user_id: supervisorId } },
            relations: [
                'student',
                'student.user',
                'supervisor',
                'supervisor.user',
                'documents',
                'evaluations',
            ],
        });
        return pfes.map((pfe) => ({
            ...pfe_mapper_1.PfeMapper.toDto(pfe),
            submission_date: pfe.submission_date
                ? (0, date_fns_1.format)(pfe.submission_date, 'dd/MM/yyyy')
                : undefined,
            defense_date: pfe.defense_date
                ? (0, date_fns_1.format)(pfe.defense_date, 'dd/MM/yyyy')
                : undefined,
        }));
    }
};
exports.PfeService = PfeService;
exports.PfeService = PfeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pfe_entity_1.Pfe)),
    __param(1, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __param(2, (0, typeorm_1.InjectRepository)(teacher_entity_1.Teacher)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PfeService);
//# sourceMappingURL=pfe.service.js.map