import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressesModule } from './addresses/addresses.module';
import { AcademicInstitutionModule } from './academic-institution/academic-institution.module';
import { DegreeProgramModule } from './degree-programs/degree-programs.module';
import { MajorsModule } from './majors/majors.module';
import { SpecialitiesModule } from './specialities/specialities.module';
import { DepartmentsModule } from './departments/departments.module';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Load configuration first
    ConfigModule.forRoot({
      isGlobal: true, // Make ConfigService available globally
      envFilePath: '.env',
    }),

    // Database configuration
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
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
        installExtensions: true, // This will automatically install required extensions
      }),
    }),

    // Application modules
    AddressesModule,
    AcademicInstitutionModule,
    DegreeProgramModule,
    MajorsModule,
    SpecialitiesModule,
    DepartmentsModule,
    UsersModule,
    StudentsModule,
    AuthModule,
  ],
})
export class AppModule {}
