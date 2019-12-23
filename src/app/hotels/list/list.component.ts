import { Component, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Activity } from 'src/app/models/activity';
import { MainService } from 'src/app/main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  subscribes: Subscription[] = [];
  activities: Activity[];
  @Output() public choosedHotel: EventEmitter<string> = new EventEmitter();

  constructor(
    public mainServise: MainService
  ) {
  }

  ngOnInit() {
    const d = this.mainServise.getActivities().subscribe(items => {
      this.activities = [...items];
    });
    const e = this.mainServise.getCollections().subscribe(el => {
      const idList: string[] = [];
      el.docs.forEach(elem => idList.push(elem.id));
      this.activities.forEach((act, i) => {
        act.id = idList[i];
      });
      console.log('-------', this.activities);
    });
    this.subscribes.push(d, e);
  }

  ngOnDestroy() {
    this.subscribes.forEach(s => s.unsubscribe);
  }

  onChoosedHotel(e) {
    this.choosedHotel.emit(e);
    console.log(e);
  }
}
