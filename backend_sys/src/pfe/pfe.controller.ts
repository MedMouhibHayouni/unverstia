import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PfeService } from './pfe.service';
import { PfeResponseDto } from './dto/pfe-response.dto';
import { CreatePfeDto } from './dto/create-pfe.dto';
import { UpdatePfeDto } from './dto/update-pfe.dto';
import { plainToClass } from 'class-transformer';

@Controller('pfe')
export class PfeController {
  constructor(private readonly pfeService: PfeService) {}

  @Post()
  async create(@Body() dto: CreatePfeDto): Promise<PfeResponseDto> {
    const pfe = await this.pfeService.create(dto);
    return plainToClass(PfeResponseDto, pfe, { excludeExtraneousValues: true });
  }

  @Get()
  findAll(): Promise<PfeResponseDto[]> {
    return this.pfeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PfeResponseDto> {
    return this.pfeService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() dto: UpdatePfeDto,
  ): Promise<PfeResponseDto> {
    return this.pfeService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.pfeService.delete(id);
  }

  @Post(':id/approve')
  approve(@Param('id') id: number): Promise<PfeResponseDto> {
    return this.pfeService.approvePfe(id);
  }

  @Post(':id/reject')
  reject(@Param('id') id: number): Promise<PfeResponseDto> {
    return this.pfeService.rejectPfe(id);
  }

  // In pfe.controller.ts
  @Get('supervisor/:id')
  async getBySupervisor(@Param('id') id: number): Promise<PfeResponseDto[]> {
    return this.pfeService.getBySupervisor(id);
  }
}
