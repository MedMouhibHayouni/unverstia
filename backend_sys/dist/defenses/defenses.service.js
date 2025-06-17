"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefensesService = void 0;
const common_1 = require("@nestjs/common");
let DefensesService = class DefensesService {
    create(createDefenseDto) {
        return 'This action adds a new defense';
    }
    findAll() {
        return `This action returns all defenses`;
    }
    findOne(id) {
        return `This action returns a #${id} defense`;
    }
    update(id, updateDefenseDto) {
        return `This action updates a #${id} defense`;
    }
    remove(id) {
        return `This action removes a #${id} defense`;
    }
};
exports.DefensesService = DefensesService;
exports.DefensesService = DefensesService = __decorate([
    (0, common_1.Injectable)()
], DefensesService);
//# sourceMappingURL=defenses.service.js.map