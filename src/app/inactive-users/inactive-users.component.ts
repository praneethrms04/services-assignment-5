import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
})
export class InactiveUsersComponent implements OnInit {
  users!: string[];

  constructor(private userservice: UsersService) {}
  ngOnInit(): void {
    this.users = this.userservice.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userservice.onSetToActive(id);
  }
}
