"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStatesEnum1746204647130 = void 0;
class CreateStatesEnum1746204647130 {
    async up(queryRunner) {
        await queryRunner.query(`
          CREATE TYPE States AS ENUM ('Tunis',
        'Ariana',
        'Manouba',
        'Ben Arous',
        'Nabeul',
        'Zaghouan',
        'Béja',
        'Jendouba',
        'Kasserine',
        'Kef',
        'Siliana',
        'Sousse',
        'Monastir',
        'Mahdia',
        'Sfax',
        'Kairouan',
        'Sidi Bouzid',
        'Gafsa',
        'Tozeur',
        'Kébili',
        'Medenine',
        'Tataouine',
        'Gabès'
        )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TYPE States`);
    }
}
exports.CreateStatesEnum1746204647130 = CreateStatesEnum1746204647130;
//# sourceMappingURL=1746204647130-CreateStatesEnum.js.map