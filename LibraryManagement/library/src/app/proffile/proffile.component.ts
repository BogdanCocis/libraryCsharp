import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

export interface TableElement {
  name: string;
  value: string | undefined;
}


@Component({
  selector: 'app-proffile',
  templateUrl: './proffile.component.html',
  styleUrl: './proffile.component.css'
})
export class ProffileComponent implements OnInit {

  dataSource: TableElement[] = [];
  columns: string[] = ['name', 'value'];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    let user = this.api.getTokenUserInfo();

    this.dataSource = [
      { name: 'Id', value: user?.id?.toString() },
      { name: 'Name', value: user?.firstName + ' ' + user?.lastName },
      { name: 'Email', value: user?.email ?? '' },
      { name: 'Blocked', value: this.blockedStatus() },
      { name: 'Active', value: this.activeStatus() },
    ];
  }

  blockedStatus(): string {
    let blocked = this.api.getTokenUserInfo()?.blocked;
    return blocked ? 'YES, you are BLOCKED' : 'NO, you are not BLOCKED!';
  }

  activeStatus(): string {
    let active = this.api.getTokenUserInfo()?.active;
    return active
      ? 'YES, your account is ACTIVE'
      : 'NO, your account is not ACTIVE!';
  }

}
