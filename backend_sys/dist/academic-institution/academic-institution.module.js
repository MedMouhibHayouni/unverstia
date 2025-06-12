"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicInstitutionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const academic_institution_service_1 = require("./academic-institution.service");
const academic_institution_controller_1 = require("./academic-institution.controller");
const academic_institution_entity_1 = require("./entities/academic-institution.entity");
const addresses_module_1 = require("../addresses/addresses.module");
let AcademicInstitutionModule = class AcademicInstitutionModule {
};
exports.AcademicInstitutionModule = AcademicInstitutionModule;
exports.AcademicInstitutionModule = AcademicInstitutionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([academic_institution_entity_1.AcademicInstitution]), addresses_module_1.AddressesModule],
        controllers: [academic_institution_controller_1.AcademicInstitutionController],
        providers: [academic_institution_service_1.AcademicInstitutionService],
        exports: [academic_institution_service_1.AcademicInstitutionService],
    })
], AcademicInstitutionModule);
//# sourceMappingURL=academic-institution.module.js.map