import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  activities: Activity[];
  constructor(
    public mainServise: MainService
  ) {
  }

  ngOnInit() {
    this.mainServise.getActivities().subscribe(items => {
      this.activities = [...items];
    });
  }

}
