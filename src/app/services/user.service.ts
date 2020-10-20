import {Injectable} from '@angular/core';
import {State, User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends: User[];
  constructor() {
    let usuario1: User = {
      nick: 'Eduardo',
      age: 24,
      state: State.AWAY,
      email: 'ed@aoe.aoe',
      friend: true,
      uid: 1
    };
    let usuario2: User = {
      nick: 'Freddy',
      age: 28,
      state: State.BUSY,
      email: 'fred@aoe.aoe',
      friend: true,
      uid: 2
    };
    let usuario3: User = {
      nick: 'Yuliana',
      age: 18,
      state: State.BUSY,
      email: 'yuli@aoe.aoe',
      friend: true,
      uid: 3
    };
    let usuario4: User = {
      nick: 'Ricardo',
      age: 17,
      state: State.OFFLINE,
      email: 'rick@aoe.aoe',
      friend: false,
      uid: 4
    };
    let usuario5: User = {
      nick: 'Marcos',
      age: 30,
      state: State.ONLINE,
      email:'marcos@aoe.aoe',
      friend: false,
      uid: 5
    };
    this.friends = [usuario1, usuario2, usuario3, usuario4, usuario5];
  }

  getFriends(){
    return this.friends;
  }
}
