"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const addresses_module_1 = require("./addresses/addresses.module");
const academic_institution_module_1 = require("./academic-institution/academic-institution.module");
const degree_programs_module_1 = require("./degree-programs/degree-programs.module");
const majors_module_1 = require("./majors/majors.module");
const specialities_module_1 = require("./specialities/specialities.module");
const departments_module_1 = require("./departments/departments.module");
const users_module_1 = require("./users/users.module");
const students_module_1 = require("./students/students.module");
const auth_module_1 = require("./auth/auth.module");
const teachers_module_1 = require("./teachers/teachers.module");
const industrial_tutors_module_1 = require("./industrial-tutors/industrial-tutors.module");
const pfe_module_1 = require("./pfe/pfe.module");
const internships_module_1 = require("./internships/internships.module");
const defenses_module_1 = require("./defenses/defenses.module");
const documents_module_1 = require("./documents/documents.module");
const notifications_module_1 = require("./notifications/notifications.module");
const roles_module_1 = require("./roles/roles.module");
const positions_module_1 = require("./positions/positions.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    autoLoadEntities: true,
                    synchronize: configService.get('DB_SYNCHRONIZE'),
                    logging: configService.get('DB_LOGGING'),
                    migrations: [__dirname + '/migrations/*{.ts,.js}'],
                    installExtensions: true,
                }),
            }),
            addresses_module_1.AddressesModule,
            academic_institution_module_1.AcademicInstitutionModule,
            degree_programs_module_1.DegreeProgramModule,
            majors_module_1.MajorsModule,
            specialities_module_1.SpecialitiesModule,
            departments_module_1.DepartmentsModule,
            users_module_1.UsersModule,
            students_module_1.StudentsModule,
            auth_module_1.AuthModule,
            teachers_module_1.TeachersModule,
            industrial_tutors_module_1.IndustrialTutorsModule,
            pfe_module_1.PfeModule,
            internships_module_1.InternshipsModule,
            defenses_module_1.DefensesModule,
            documents_module_1.DocumentsModule,
            notifications_module_1.NotificationsModule,
            roles_module_1.RolesModule,
            positions_module_1.PositionsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map