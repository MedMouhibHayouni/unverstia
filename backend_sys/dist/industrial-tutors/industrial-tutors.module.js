"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustrialTutorsModule = void 0;
const common_1 = require("@nestjs/common");
const industrial_tutors_service_1 = require("./industrial-tutors.service");
const industrial_tutors_controller_1 = require("./industrial-tutors.controller");
let IndustrialTutorsModule = class IndustrialTutorsModule {
};
exports.IndustrialTutorsModule = IndustrialTutorsModule;
exports.IndustrialTutorsModule = IndustrialTutorsModule = __decorate([
    (0, common_1.Module)({
        controllers: [industrial_tutors_controller_1.IndustrialTutorsController],
        providers: [industrial_tutors_service_1.IndustrialTutorsService],
    })
], IndustrialTutorsModule);
//# sourceMappingURL=industrial-tutors.module.js.map