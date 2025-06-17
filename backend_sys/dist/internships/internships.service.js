"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternshipsService = void 0;
const common_1 = require("@nestjs/common");
let InternshipsService = class InternshipsService {
    create(createInternshipDto) {
        return 'This action adds a new internship';
    }
    findAll() {
        return `This action returns all internships`;
    }
    findOne(id) {
        return `This action returns a #${id} internship`;
    }
    update(id, updateInternshipDto) {
        return `This action updates a #${id} internship`;
    }
    remove(id) {
        return `This action removes a #${id} internship`;
    }
};
exports.InternshipsService = InternshipsService;
exports.InternshipsService = InternshipsService = __decorate([
    (0, common_1.Injectable)()
], InternshipsService);
//# sourceMappingURL=internships.service.js.map