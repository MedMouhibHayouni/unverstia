"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PfeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pfe_entity_1 = require("./entities/pfe.entity");
const pfe_document_entity_1 = require("./entities/pfe-document.entity");
const pfe_evaluation_entity_1 = require("./entities/pfe-evaluation.entity");
const students_module_1 = require("../students/students.module");
const teachers_module_1 = require("../teachers/teachers.module");
const pfe_controller_1 = require("./pfe.controller");
const pfe_evaluation_controller_1 = require("./pfe-evaluation.controller");
const pfe_service_1 = require("./pfe.service");
const pfe_evaluation_service_1 = require("./pfe-evaluation.service");
const pfe_document_service_1 = require("./pfe-document.service");
const pfe_document_controller_1 = require("./pfe-document.controller");
let PfeModule = class PfeModule {
};
exports.PfeModule = PfeModule;
exports.PfeModule = PfeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([pfe_entity_1.Pfe, pfe_document_entity_1.PfeDocument, pfe_evaluation_entity_1.PfeEvaluation]),
            students_module_1.StudentsModule,
            teachers_module_1.TeachersModule,
        ],
        controllers: [pfe_controller_1.PfeController, pfe_evaluation_controller_1.PfeEvaluationController, pfe_document_controller_1.PfeDocumentController],
        providers: [pfe_service_1.PfeService, pfe_evaluation_service_1.PfeEvaluationService, pfe_document_service_1.PfeDocumentService],
        exports: [pfe_service_1.PfeService],
    })
], PfeModule);
//# sourceMappingURL=pfe.module.js.map