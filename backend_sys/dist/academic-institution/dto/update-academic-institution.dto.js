"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAcademicInstitutionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_academic_institution_dto_1 = require("./create-academic-institution.dto");
class UpdateAcademicInstitutionDto extends (0, mapped_types_1.PartialType)(create_academic_institution_dto_1.CreateAcademicInstitutionDto) {
}
exports.UpdateAcademicInstitutionDto = UpdateAcademicInstitutionDto;
//# sourceMappingURL=update-academic-institution.dto.js.map