import { Pipe, PipeTransform } from '@angular/core';
import { ActivityID } from '../models/activity';

@Pipe({
  name: 'hotelfilter'
})
export class HotelfilterPipe implements PipeTransform {

  transform(value: ActivityID[], key: string = ''): ActivityID[] {
    return value.filter((el) => el.title.toLocaleLowerCase().indexOf(key) !== -1);
  }
}
