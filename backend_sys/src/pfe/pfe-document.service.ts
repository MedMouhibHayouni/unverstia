import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PfeDocument } from './entities/pfe-document.entity';
import { SubmitDocumentDto } from './dto/submit-document.dto';

@Injectable()
export class PfeDocumentService {
  constructor(
    @InjectRepository(PfeDocument)
    private readonly docRepo: Repository<PfeDocument>,
  ) {}

  async create(dto: SubmitDocumentDto): Promise<PfeDocument> {
    const document = this.docRepo.create(dto);
    return await this.docRepo.save(document);
  }
}
