import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ActivityID } from 'src/app/models/activity';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() public activities: ActivityID;
  @Output() public choosedHotel: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  onChoosedHotel(e) {
    this.choosedHotel.emit(e);
  }
}
