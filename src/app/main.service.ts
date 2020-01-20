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
      this.itemsCollection = afs.collection<Activity>('activity', ref => ref.orderBy('title', 'asc'));
      this.activities = this.itemsCollection.snapshotChanges().pipe(
        map(acts => acts.map(el => {
          const id: string = el.payload.doc.id as string;
          const data: Activity = el.payload.doc.data() as Activity;
          return {id, ...data} as ActivityID;
        }))
        );
     }

     getActivities(): Observable<ActivityID[]> {
       return this.activities;
     }

     addActivity(el: Activity): void {
      this.itemsCollection.add(el as Activity);
     }

     removeActivity(el: ActivityID): void {
      this.itemsCollection.doc(el.id).delete();
     }
}
