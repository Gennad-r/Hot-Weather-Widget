import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ActivityID } from 'src/app/models/activity';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() public activities: ActivityID;
  @Input() public current: string;
  @Input() public keyword: string;
  @Output() public choosedHotel: EventEmitter<ActivityID> = new EventEmitter();
  stars: number = null;

  onChoosedHotel(e: ActivityID) {
    this.choosedHotel.emit(e);
  }

}
