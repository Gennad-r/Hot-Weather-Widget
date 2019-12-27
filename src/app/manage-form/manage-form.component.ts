import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Activity } from '../models/activity';

@Component({
  selector: 'app-manage-form',
  templateUrl: './manage-form.component.html',
  styleUrls: ['./manage-form.component.scss']
})
export class ManageFormComponent implements OnInit {
  item: Activity = {
    title: '',
    address: '',
    description: '',
    phone: '',
    picture: '',
    photos: [''],
    weather: {
      temperature: null,
      wind: null,
      icon: 'sun'
    },
    profile: {
      followers: null,
      following: null,
      photo: ''
    },
    stars: 1
  };
  constructor(private mainServise: MainService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.item);
  }
}