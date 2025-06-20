import { Injectable, inject, Injector, runInInjectionContext } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private injector = inject(Injector); // <-- correcto

  getItems(collectionName: string): Observable<any[]> {
    return runInInjectionContext(this.injector, () => {
      const firestore = inject(Firestore);
      const itemsRef = collection(firestore, collectionName);
      return collectionData(itemsRef, { idField: 'id' });
    });
  }

  createItem(collectionName: string, data: any): Promise<void> {
    return runInInjectionContext(this.injector, async () => {
      const firestore = inject(Firestore);
      const itemsRef = collection(firestore, collectionName);
      await addDoc(itemsRef, data);
    });
  }

  deleteItem(collectionName: string, id: string): Promise<void> {
    return runInInjectionContext(this.injector, async () => {
      const firestore = inject(Firestore);
      const docRef = doc(firestore, `${collectionName}/${id}`);
      await deleteDoc(docRef);
    });
  }

  updateItem(collectionName: string, id: string, data: any): Promise<void> {
    return runInInjectionContext(this.injector, async () => {
      const firestore = inject(Firestore);
      const docRef = doc(firestore, `${collectionName}/${id}`);
      await updateDoc(docRef, data);
    });
  }
}
