import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validatePfe'
})
export class ValidatePfePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
