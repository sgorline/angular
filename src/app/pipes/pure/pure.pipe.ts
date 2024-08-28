import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
  standalone: true,
  pure: true
})
export class PurePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'pure returned value';
  }

}
