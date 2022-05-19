import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phone' })
export class PhonePipe implements PipeTransform {
  transform(value: number, format?: string): string {
    // format style: "(###) ####-####"
    if (format) {
      let result = value.toString().split('');
      let _format = Array.from(format);
      for (let i = _format.length - 1; i >= 0; i--) {
        if (_format[i] == '#') {
          const temp = result.pop();
          if (temp) {
            _format[i] = temp;
          } else {
            _format[i] = '0';
          }
        }
      }
      result = _format;
      return result.join('');
    }
    return value.toString();
  }
}
