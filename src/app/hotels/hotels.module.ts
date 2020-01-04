import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { WeatherComponent } from './weather/weather.component';
import { ListComponent } from './list/list.component';
import { HotelsComponent } from '../hotels/hotels.component';
import { HotelfilterPipe } from '../pipes/hotelfilter.pipe';
import { FormsModule } from '@angular/forms';
import { StarsPipe } from '../pipes/stars.pipe';




@NgModule({
  declarations: [
    HotelsComponent,
    ProfileComponent,
    WeatherComponent,
    ListComponent,
    HotelfilterPipe,
    StarsPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HotelsComponent]
})
export class HotelsModule { }
