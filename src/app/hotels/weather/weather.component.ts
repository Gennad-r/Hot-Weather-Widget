import { Component, Input } from '@angular/core';
import { IWeather } from 'src/app/models/activity';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  @Input() public weather: IWeather;
}
