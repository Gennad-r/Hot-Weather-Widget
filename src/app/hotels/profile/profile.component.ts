import { Component, Input } from '@angular/core';
import { IProfile } from 'src/app/models/activity';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() public profile: IProfile;
}
