"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddressesTable1746204647131 = void 0;
class CreateAddressesTable1746204647131 {
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        address_details VARCHAR(255) NOT NULL,
        zip_code INTEGER NOT NULL,
        city VARCHAR(20),
        state States NOT NULL,
        additional_details VARCHAR(255)
    )
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE addresses`);
    }
}
exports.CreateAddressesTable1746204647131 = CreateAddressesTable1746204647131;
//# sourceMappingURL=1746204647131-CreateAddresses.js.map