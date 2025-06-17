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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PfeDocument = void 0;
const typeorm_1 = require("typeorm");
const pfe_entity_1 = require("./pfe.entity");
const document_type_enum_1 = require("../../enums/document-type.enum");
let PfeDocument = class PfeDocument {
};
exports.PfeDocument = PfeDocument;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PfeDocument.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], PfeDocument.prototype, "file_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: document_type_enum_1.DocumentType }),
    __metadata("design:type", String)
], PfeDocument.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PfeDocument.prototype, "uploaded_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pfe_entity_1.Pfe, (pfe) => pfe.documents),
    (0, typeorm_1.JoinColumn)({ name: 'pfe_id' }),
    __metadata("design:type", pfe_entity_1.Pfe)
], PfeDocument.prototype, "pfe", void 0);
exports.PfeDocument = PfeDocument = __decorate([
    (0, typeorm_1.Entity)('pfe_documents')
], PfeDocument);
//# sourceMappingURL=pfe-document.entity.js.map