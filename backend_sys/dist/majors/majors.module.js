"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MajorsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const major_entity_1 = require("./entities/major.entity");
const majors_service_1 = require("./majors.service");
const majors_controller_1 = require("./majors.controller");
const department_entity_1 = require("../departments/entities/department.entity");
const speciality_entity_1 = require("../specialities/entities/speciality.entity");
const degree_program_entity_1 = require("../degree-programs/entities/degree-program.entity");
let MajorsModule = class MajorsModule {
};
exports.MajorsModule = MajorsModule;
exports.MajorsModule = MajorsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([major_entity_1.Major, department_entity_1.Department, speciality_entity_1.Speciality, degree_program_entity_1.DegreeProgram]),
        ],
        controllers: [majors_controller_1.MajorsController],
        providers: [majors_service_1.MajorsService],
        exports: [majors_service_1.MajorsService],
    })
], MajorsModule);
//# sourceMappingURL=majors.module.js.map