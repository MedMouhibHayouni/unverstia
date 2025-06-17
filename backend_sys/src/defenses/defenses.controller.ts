import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DefensesService } from './defenses.service';
import { CreateDefenseDto } from './dto/create-defense.dto';
import { UpdateDefenseDto } from './dto/update-defense.dto';

@Controller('defenses')
export class DefensesController {
  constructor(private readonly defensesService: DefensesService) {}

  @Post()
  create(@Body() createDefenseDto: CreateDefenseDto) {
    return this.defensesService.create(createDefenseDto);
  }

  @Get()
  findAll() {
    return this.defensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.defensesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDefenseDto: UpdateDefenseDto) {
    return this.defensesService.update(+id, updateDefenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.defensesService.remove(+id);
  }
}
