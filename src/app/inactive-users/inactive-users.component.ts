import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
 users: string[];
  constructor(private usersService: UsersService) { this.users = this.usersService.inactiveUsers;
  }

  ngOnInit() {
  }
  onSetToActive(id: number) { this.usersService.userModeChanged.emit(id);
  this.usersService.onSetToInactive(id);
}
}
