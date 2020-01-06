import { Pipe, PipeTransform } from '@angular/core';
import { ActivityID } from '../models/activity';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(value: ActivityID[], stars: number = null): ActivityID[] {
    if (!stars) { return value as ActivityID[]; }
    return value.filter((el: ActivityID) => el.stars === stars);
  }

}
