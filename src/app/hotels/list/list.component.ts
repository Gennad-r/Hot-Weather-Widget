import { Component, OnInit, OnDestroy } from '@angular/core';
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
  constructor(
    public mainServise: MainService
  ) {
  }

  ngOnInit() {
    const d = this.mainServise.getActivities().subscribe(items => {
      this.activities = [...items];
    });
    this.subscribes.push(d);
  }

  ngOnDestroy() {
    this.subscribes.forEach(s => s.unsubscribe);
  }

}
