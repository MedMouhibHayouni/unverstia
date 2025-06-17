import { Injectable } from '@nestjs/common';
import { CreateIndustrialTutorDto } from './dto/create-industrial-tutor.dto';
import { UpdateIndustrialTutorDto } from './dto/update-industrial-tutor.dto';

@Injectable()
export class IndustrialTutorsService {
  create(createIndustrialTutorDto: CreateIndustrialTutorDto) {
    return 'This action adds a new industrialTutor';
  }

  findAll() {
    return `This action returns all industrialTutors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} industrialTutor`;
  }

  update(id: number, updateIndustrialTutorDto: UpdateIndustrialTutorDto) {
    return `This action updates a #${id} industrialTutor`;
  }

  remove(id: number) {
    return `This action removes a #${id} industrialTutor`;
  }
}
