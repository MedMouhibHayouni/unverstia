import { PipeTransform } from '@nestjs/common';
export declare class DateFormatPipe implements PipeTransform {
    transform(value: any): Date;
}
