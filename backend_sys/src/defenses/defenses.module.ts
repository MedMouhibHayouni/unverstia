import { Module } from '@nestjs/common';
import { DefensesService } from './defenses.service';
import { DefensesController } from './defenses.controller';

@Module({
  controllers: [DefensesController],
  providers: [DefensesService],
})
export class DefensesModule {}
