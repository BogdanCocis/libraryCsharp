import { Component,EventEmitter,Output } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent {
  
  @Output() menuClicked=new EventEmitter<boolean>();
  constructor(public api: ApiService){}

  logOut(){
    this.api.deleteToken();
  }


}
