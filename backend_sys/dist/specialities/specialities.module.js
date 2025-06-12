"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialitiesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const speciality_entity_1 = require("./entities/speciality.entity");
const specialities_service_1 = require("./specialities.service");
const specialities_controller_1 = require("./specialities.controller");
const degree_program_entity_1 = require("../degree-programs/entities/degree-program.entity");
const major_entity_1 = require("../majors/entities/major.entity");
let SpecialitiesModule = class SpecialitiesModule {
};
exports.SpecialitiesModule = SpecialitiesModule;
exports.SpecialitiesModule = SpecialitiesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([speciality_entity_1.Speciality, degree_program_entity_1.DegreeProgram, major_entity_1.Major])],
        controllers: [specialities_controller_1.SpecialitiesController],
        providers: [specialities_service_1.SpecialitiesService],
        exports: [specialities_service_1.SpecialitiesService],
    })
], SpecialitiesModule);
//# sourceMappingURL=specialities.module.js.map