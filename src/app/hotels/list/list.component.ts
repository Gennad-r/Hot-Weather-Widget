import { Component, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ActivityID } from 'src/app/models/activity';
import { MainService } from 'src/app/main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  subscribes: Subscription[] = [];
  activities: ActivityID[];
  @Output() public choosedHotel: EventEmitter<string> = new EventEmitter();

  constructor(
    private mainServise: MainService
  ) {
  }

  ngOnInit() {
    const d = this.mainServise.getActivities().subscribe(items => {
      this.activities = [...items];
      console.log('items', this.activities);
    });

    this.subscribes.push(d);
  }

  ngOnDestroy() {
    this.subscribes.forEach(s => s.unsubscribe);
  }

  onChoosedHotel(e) {
    this.choosedHotel.emit(e);
    console.log(e);
  }
}
