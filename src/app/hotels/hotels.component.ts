import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivityID } from '../models/activity';
import { MainService } from '../main.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit, OnDestroy {
  subscribes: Subscription[] = [];
  activities: ActivityID[];
  current: ActivityID;
  constructor(private mainServise: MainService) { }

  ngOnInit() {
    const d = this.mainServise.getActivities().subscribe(items => {
      this.activities = [...items];
      this.current = this.activities[0];
    });

    this.subscribes.push(d);
  }

  ngOnDestroy() {
    this.subscribes.forEach(s => s.unsubscribe);
  }

  getHotelID(id) {
    this.current = this.activities.filter(el => el.id === id)[0];
  }

}
