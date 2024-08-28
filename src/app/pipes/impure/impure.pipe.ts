import { Pipe, PipeTransform } from '@angular/core';

type Person = {
  first_name: string,
  last_name: string
};

@Pipe({
  name: 'impure',
  standalone: true,
  pure: false
})
export class ImpurePipe implements PipeTransform {

  transform(value: Person, ...args: unknown[]): unknown {
    return value.first_name.charAt(0).toUpperCase() + value.first_name.substring(1).toLowerCase()
      + ' '
      + value.last_name.charAt(0).toUpperCase() + value.last_name.substring(1).toLowerCase();
  }

}
