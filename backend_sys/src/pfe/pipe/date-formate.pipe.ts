// date-format.pipe.ts
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class DateFormatPipe implements PipeTransform {
  transform(value: any) {
    if (!value) return null;

    // Handle both "17/06/2025" format and Date objects
    if (value instanceof Date) {
      return new Date(value.getFullYear(), value.getMonth(), value.getDate());
    }

    if (typeof value === 'string') {
      const parts = value.split('/');
      if (parts.length === 3) {
        return new Date(
          parseInt(parts[2]),
          parseInt(parts[1]) - 1,
          parseInt(parts[0]),
        );
      }
    }

    throw new BadRequestException('Invalid date format. Use DD/MM/YYYY');
  }
}
