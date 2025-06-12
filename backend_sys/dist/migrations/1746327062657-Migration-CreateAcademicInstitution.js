"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationCreateAcademicInstitution1746327062657 = void 0;
class MigrationCreateAcademicInstitution1746327062657 {
    constructor() {
        this.name = 'MigrationCreateAcademicInstitution1746327062657';
    }
    async up(queryRunner) {
        await queryRunner.query(`	CREATE TABLE academic_institution (
            id INT PRIMARY KEY DEFAULT 1,
            name VARCHAR(100) NOT NULL,
            university VARCHAR(100) NOT NULL,
            phone INT NOT NULL,
            fax INT,
            address_id INT NULL,
            email VARCHAR(255) NOT NULL,
            director VARCHAR(100) NOT NULL,
            logo_url VARCHAR(255) DEFAULT 'assets/images/default-logo.png'
        )`);
        await queryRunner.query(`ALTER TABLE "academic_institution" ADD CONSTRAINT fk_institution_address FOREIGN KEY (address_id) REFERENCES addresses(id)`);
        await queryRunner.query(`INSERT INTO academic_institution (id, name, university, phone, email, director) 
            VALUES (1, 'Default Institution', 'Default University', 1234567890, 'default@university.edu', 'Default Director')`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "academic_institution" DROP CONSTRAINT "fk_institution_address"`);
        await queryRunner.query(`DROP TABLE "academic_institution"`);
    }
}
exports.MigrationCreateAcademicInstitution1746327062657 = MigrationCreateAcademicInstitution1746327062657;
//# sourceMappingURL=1746327062657-Migration-CreateAcademicInstitution.js.map