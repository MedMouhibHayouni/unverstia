"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormatPipe = void 0;
const common_1 = require("@nestjs/common");
let DateFormatPipe = class DateFormatPipe {
    transform(value) {
        if (!value)
            return null;
        if (value instanceof Date) {
            return new Date(value.getFullYear(), value.getMonth(), value.getDate());
        }
        if (typeof value === 'string') {
            const parts = value.split('/');
            if (parts.length === 3) {
                return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
            }
        }
        throw new common_1.BadRequestException('Invalid date format. Use DD/MM/YYYY');
    }
};
exports.DateFormatPipe = DateFormatPipe;
exports.DateFormatPipe = DateFormatPipe = __decorate([
    (0, common_1.Injectable)()
], DateFormatPipe);
//# sourceMappingURL=date-formate.pipe.js.map