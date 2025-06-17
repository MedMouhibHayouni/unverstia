import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { SubmitDocumentDto } from './dto/submit-document.dto';
import { PfeDocumentService } from './pfe-document.service';

@Controller('pfe/document')
@UsePipes(new ValidationPipe({ transform: true }))
export class PfeDocumentController {
  constructor(private readonly docService: PfeDocumentService) {}

  @Post()
  async create(@Body() dto: SubmitDocumentDto) {
    return await this.docService.create(dto);
  }
}
