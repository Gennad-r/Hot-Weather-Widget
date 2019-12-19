import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Activity } from './models/activity';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  itemsCollection: AngularFirestoreCollection<Activity>;
  activities: Observable<Activity[]>;
  constructor(
    private afs: AngularFirestore
    ) {
      this.activities = this.afs.collection('activity').valueChanges();
     }

     getActivities() {
       return this.activities;
     }
}
