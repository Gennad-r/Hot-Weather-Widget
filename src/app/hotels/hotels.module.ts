import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { WeatherComponent } from './weather/weather.component';
import { ListComponent } from './list/list.component';
import { HotelsComponent } from '../hotels/hotels.component';
import { ActivityComponent } from './list/activity/activity.component';




@NgModule({
  declarations: [
    HotelsComponent,
    ProfileComponent,
    WeatherComponent,
    ListComponent,
    ActivityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HotelsComponent]
})
export class HotelsModule { }
