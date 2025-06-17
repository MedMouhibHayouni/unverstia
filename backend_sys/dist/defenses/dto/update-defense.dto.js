"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDefenseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_defense_dto_1 = require("./create-defense.dto");
class UpdateDefenseDto extends (0, swagger_1.PartialType)(create_defense_dto_1.CreateDefenseDto) {
}
exports.UpdateDefenseDto = UpdateDefenseDto;
//# sourceMappingURL=update-defense.dto.js.map