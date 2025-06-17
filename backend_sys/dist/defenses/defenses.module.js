"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefensesModule = void 0;
const common_1 = require("@nestjs/common");
const defenses_service_1 = require("./defenses.service");
const defenses_controller_1 = require("./defenses.controller");
let DefensesModule = class DefensesModule {
};
exports.DefensesModule = DefensesModule;
exports.DefensesModule = DefensesModule = __decorate([
    (0, common_1.Module)({
        controllers: [defenses_controller_1.DefensesController],
        providers: [defenses_service_1.DefensesService],
    })
], DefensesModule);
//# sourceMappingURL=defenses.module.js.map