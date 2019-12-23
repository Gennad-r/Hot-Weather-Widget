import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
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
      this.itemsCollection = afs.collection<Activity>('activity');
      this.activities = this.itemsCollection.valueChanges();
     }

     getActivities() {
       return this.activities;
     }

     getCollections() {
      return this.itemsCollection.get();
    }
}
