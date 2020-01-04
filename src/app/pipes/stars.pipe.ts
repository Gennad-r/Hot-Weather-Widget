import { Pipe, PipeTransform } from '@angular/core';
import { ActivityID } from '../models/activity';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(value: ActivityID[], stars: number = null): any {
    if (!stars) {return value}
    return value.filter(el => el.stars === stars);
  }

}
