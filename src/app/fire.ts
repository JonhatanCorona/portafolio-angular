import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
 constructor(private firestore: Firestore) {}

  getItems(collectionName: string): Observable<any[]> {
    const itemsRef = collection(this.firestore, collectionName);
    return collectionData(itemsRef, { idField: 'id' });
  }
}
