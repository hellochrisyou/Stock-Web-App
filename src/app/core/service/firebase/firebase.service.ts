import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
// import { Ipo, Stock, History } from '@shared/interface/models';
import { ValueTransformer } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }


  // updateUser(userKey, value) {
  //   value.nameToSearch = value.name.toLowerCase();
  //   return this.db.collection('users').doc(userKey).set(value);
  // }

  // deleteUser(userKey) {
  //   return this.db.collection('users').doc(userKey).delete();
  // }

  // getUsers() {
  //   return this.db.collection('users').snapshotChanges();
  // }

  // searchUsers(searchValue) {
  //   return this.db.collection('users', ref => ref.where('nameToSearch', '>=', searchValue)
  //     .where('nameToSearch', '<=', searchValue + '\uf8ff'))
  //     .snapshotChanges()
  // }

  // searchUsersByAge(value) {
  //   return this.db.collection('users', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  // }
}
