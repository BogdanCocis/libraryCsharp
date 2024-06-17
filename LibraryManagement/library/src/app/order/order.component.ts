import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Order } from '../Models/models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  listOfOrders: Order[] = [];
  columns: string[] = ['id', 'name', 'bookid', 'book', 'date', 'returned'];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    let userid = this.api.getTokenUserInfo()?.id ?? 0;
    this.api.getOrdersOfUser(userid).subscribe({
      next: (res: Order[]) => {
        this.listOfOrders = res;
        this.listOfOrders.sort((a, b) => b.id - a.id);
        console.log(this.listOfOrders);
      },
      error: (err: any) => console.log(err),
    });
  }
}
