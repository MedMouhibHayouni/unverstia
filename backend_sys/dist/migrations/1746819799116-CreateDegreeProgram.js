"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDegreeProgram1746819799116 = void 0;
class CreateDegreeProgram1746819799116 {
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE TABLE degree_program (
        id VARCHAR(20) PRIMARY KEY,
        name VARCHAR(50) NOT NULL UNIQUE,
        code VARCHAR(10) NULL UNIQUE,
        duration_years INT NOT NULL,
        description TEXT,
        institution VARCHAR(20)
)`);
        await queryRunner.query(`ALTER TABLE degree_program ADD CONSTRAINT fk_degree_institution FOREIGN KEY (institution) REFERENCES academic_institutions(name)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE degree_program`);
    }
}
exports.CreateDegreeProgram1746819799116 = CreateDegreeProgram1746819799116;
//# sourceMappingURL=1746819799116-CreateDegreeProgram.js.map