import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivityID } from '../models/activity';
import { MainService } from '../main.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit, OnDestroy {
  subscribes: Subscription[] = [];
  activities: ActivityID[];
  current: ActivityID;
  keyword = '';

  constructor(private mainServise: MainService,
              public title: Title ) {
    title.setTitle('Hotels test title');
  }

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

  getHotelID(hotel) {
    this.current = {...hotel};
  }

}
