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
exports.InternshipsController = void 0;
const common_1 = require("@nestjs/common");
const internships_service_1 = require("./internships.service");
const create_internship_dto_1 = require("./dto/create-internship.dto");
const update_internship_dto_1 = require("./dto/update-internship.dto");
let InternshipsController = class InternshipsController {
    constructor(internshipsService) {
        this.internshipsService = internshipsService;
    }
    create(createInternshipDto) {
        return this.internshipsService.create(createInternshipDto);
    }
    findAll() {
        return this.internshipsService.findAll();
    }
    findOne(id) {
        return this.internshipsService.findOne(+id);
    }
    update(id, updateInternshipDto) {
        return this.internshipsService.update(+id, updateInternshipDto);
    }
    remove(id) {
        return this.internshipsService.remove(+id);
    }
};
exports.InternshipsController = InternshipsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_internship_dto_1.CreateInternshipDto]),
    __metadata("design:returntype", void 0)
], InternshipsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InternshipsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InternshipsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_internship_dto_1.UpdateInternshipDto]),
    __metadata("design:returntype", void 0)
], InternshipsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InternshipsController.prototype, "remove", null);
exports.InternshipsController = InternshipsController = __decorate([
    (0, common_1.Controller)('internships'),
    __metadata("design:paramtypes", [internships_service_1.InternshipsService])
], InternshipsController);
//# sourceMappingURL=internships.controller.js.map