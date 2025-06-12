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
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("./entities/student.entity");
const user_entity_1 = require("../users/entities/user.entity");
const degree_program_entity_1 = require("../degree-programs/entities/degree-program.entity");
const RoleType_enum_1 = require("../enums/RoleType.enum");
let StudentsService = class StudentsService {
    constructor(repository, userRepository, degreeProgramRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.degreeProgramRepository = degreeProgramRepository;
    }
    async create(createStudentDto) {
        const user = await this.userRepository.findOneBy({
            id: createStudentDto.user_id,
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${createStudentDto.user_id} not found`);
        }
        if (user.role !== RoleType_enum_1.RoleType.STUDENT) {
            throw new common_1.BadRequestException('User role must be set to STUDENT');
        }
        const existingStudent = await this.repository.findOneBy({
            user_id: createStudentDto.user_id,
        });
        if (existingStudent) {
            throw new common_1.ConflictException(`Student record already exists for user ID ${createStudentDto.user_id}`);
        }
        const existingStudentId = await this.repository.findOneBy({
            student_id: createStudentDto.student_id,
        });
        if (existingStudentId) {
            throw new common_1.ConflictException(`Student with ID ${createStudentDto.student_id} already exists`);
        }
        const degreeProgram = await this.degreeProgramRepository.findOneBy({
            id: createStudentDto.degree_id,
        });
        if (!degreeProgram) {
            throw new common_1.NotFoundException(`Degree program with ID ${createStudentDto.degree_id} not found`);
        }
        const student = new student_entity_1.Student();
        student.user_id = createStudentDto.user_id;
        student.sex = createStudentDto.sex;
        student.student_id = createStudentDto.student_id;
        student.degree = degreeProgram;
        student.level = createStudentDto.level;
        return await this.repository.save(student);
    }
    async findAll() {
        return await this.repository.find({
            relations: ['user', 'user.address', 'degree'],
        });
    }
    async findOne(userId) {
        return await this.repository.findOne({
            where: { user_id: userId },
            relations: ['user', 'user.address', 'degree'],
        });
    }
    async findByStudentId(studentId) {
        return await this.repository.findOne({
            where: { student_id: studentId },
            relations: ['user', 'user.address', 'degree'],
        });
    }
    async update(userId, updateStudentDto) {
        const student = await this.repository.findOne({
            where: { user_id: userId },
            relations: ['degree'],
        });
        if (!student) {
            throw new common_1.NotFoundException(`Student with user ID ${userId} not found`);
        }
        if (updateStudentDto.student_id &&
            updateStudentDto.student_id !== student.student_id) {
            const existingStudentId = await this.repository.findOneBy({
                student_id: updateStudentDto.student_id,
            });
            if (existingStudentId) {
                throw new common_1.ConflictException(`Student with ID ${updateStudentDto.student_id} already exists`);
            }
        }
        if (updateStudentDto.degree_id) {
            const degreeProgram = await this.degreeProgramRepository.findOneBy({
                id: updateStudentDto.degree_id,
            });
            if (!degreeProgram) {
                throw new common_1.NotFoundException(`Degree program with ID ${updateStudentDto.degree_id} not found`);
            }
            student.degree = degreeProgram;
        }
        if (updateStudentDto.sex !== undefined)
            student.sex = updateStudentDto.sex;
        if (updateStudentDto.student_id)
            student.student_id = updateStudentDto.student_id;
        if (updateStudentDto.level)
            student.level = updateStudentDto.level;
        return await this.repository.save(student);
    }
    async remove(userId) {
        const student = await this.findOne(userId);
        if (!student) {
            return false;
        }
        await this.repository.remove(student);
        return true;
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(degree_program_entity_1.DegreeProgram)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], StudentsService);
//# sourceMappingURL=students.service.js.map