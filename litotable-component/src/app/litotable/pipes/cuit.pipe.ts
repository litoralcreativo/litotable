import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cuit' })
export class CuitPipe implements PipeTransform {
  transform(value: number, separador: string = '.'): string {
    let result = value.toString().split('');
    result = [
      ...result.slice(0, 2),
      separador,
      ...result.slice(2, 10),
      separador,
      ...result.slice(10),
    ];
    return result.join('');
  }
}
