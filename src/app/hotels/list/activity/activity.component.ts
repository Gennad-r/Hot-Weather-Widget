import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  @Input() data: Activity;

  constructor() { }

  ngOnInit() {
  }


}
