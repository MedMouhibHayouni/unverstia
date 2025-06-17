import { Module } from '@nestjs/common';
import { IndustrialTutorsService } from './industrial-tutors.service';
import { IndustrialTutorsController } from './industrial-tutors.controller';

@Module({
  controllers: [IndustrialTutorsController],
  providers: [IndustrialTutorsService],
})
export class IndustrialTutorsModule {}
