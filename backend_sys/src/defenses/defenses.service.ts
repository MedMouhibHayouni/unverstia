import { Injectable } from '@nestjs/common';
import { CreateDefenseDto } from './dto/create-defense.dto';
import { UpdateDefenseDto } from './dto/update-defense.dto';

@Injectable()
export class DefensesService {
  create(createDefenseDto: CreateDefenseDto) {
    return 'This action adds a new defense';
  }

  findAll() {
    return `This action returns all defenses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} defense`;
  }

  update(id: number, updateDefenseDto: UpdateDefenseDto) {
    return `This action updates a #${id} defense`;
  }

  remove(id: number) {
    return `This action removes a #${id} defense`;
  }
}
