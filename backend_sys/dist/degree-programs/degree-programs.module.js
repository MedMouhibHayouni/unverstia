"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DegreeProgramModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const degree_program_entity_1 = require("./entities/degree-program.entity");
const degree_programs_service_1 = require("./degree-programs.service");
const degree_programs_controller_1 = require("./degree-programs.controller");
const major_entity_1 = require("../majors/entities/major.entity");
const speciality_entity_1 = require("../specialities/entities/speciality.entity");
const academic_institution_entity_1 = require("../academic-institution/entities/academic-institution.entity");
let DegreeProgramModule = class DegreeProgramModule {
};
exports.DegreeProgramModule = DegreeProgramModule;
exports.DegreeProgramModule = DegreeProgramModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                degree_program_entity_1.DegreeProgram,
                major_entity_1.Major,
                speciality_entity_1.Speciality,
                academic_institution_entity_1.AcademicInstitution,
            ]),
        ],
        providers: [degree_programs_service_1.DegreeProgramsService],
        controllers: [degree_programs_controller_1.DegreeProgramsController],
        exports: [degree_programs_service_1.DegreeProgramsService],
    })
], DegreeProgramModule);
//# sourceMappingURL=degree-programs.module.js.map