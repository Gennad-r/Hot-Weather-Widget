import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Activity } from '../models/activity';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
                private mainServise: MainService,
                private snack: MatSnackBar,
                public title: Title
              ) {
                title.setTitle('Add new hotel');
              }

  ngOnInit() {
  }

  onSubmit(data: NgForm) {
    const finalData: Activity = {
      ...data.value,
      photos: this.item.photos,
      profile: this.item.profile,
      weather: this.item.weather
    };
    console.log(finalData);
    this.snack.open(`Hotel ${finalData.title} added`, '', {
      duration: 7000
    });
    data.resetForm();
  }

  onSend(data) {
    const finalData: Activity = {
      ...data.value,
      photos: this.item.photos,
      profile: this.item.profile,
      weather: this.item.weather
    };
    delete finalData['01'];
    this.mainServise.addActivity(finalData);
    data.resetForm();
  }
}
