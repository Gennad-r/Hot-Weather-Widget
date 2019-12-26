import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Activity, ActivityID } from './models/activity';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private itemsCollection: AngularFirestoreCollection<Activity>;
  private activities: Observable<ActivityID[]>;
  data: ActivityID[];
  constructor(
    private afs: AngularFirestore
    ) {
      this.itemsCollection = afs.collection<Activity>('activity');
      this.activities = this.itemsCollection.snapshotChanges().pipe(
        map(acts => acts.map(el => {
          const id = el.payload.doc.id as string;
          const data = el.payload.doc.data() as Activity;
          return {id, ...data};
        }))
        );
     }

     getActivities() {
       return this.activities;
     }
}
