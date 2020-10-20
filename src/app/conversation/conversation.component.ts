import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId: any;
  friends: User[];
  friend: User;
  price: number = 78.4464644654654;
  today: any = Date.now();
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.friendId = this.activatedRoute.snapshot.params['uid'];
    console.log(this.friendId);
    this.friends = userService.getFriends();
    this.friend = this.getUserById(this.friendId);
    console.log(this.friend);

  }

  ngOnInit(): void {
  }

  getUserById(uid): User{
    return this.friends.find(data => data.uid == uid);
  }

}
