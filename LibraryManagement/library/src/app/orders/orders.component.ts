import { Component, OnInit } from '@angular/core';
import { Order } from '../Models/models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  listOfOrders: Order[] = [];
  ordersToDisplay: Order[] = [];
  columns: string[] = [
    'id',
    'userid',
    'name',
    'bookid',
    'book',
    'date',
    'returned',
  ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllOrders().subscribe({
      next: (res: Order[]) => {
        this.listOfOrders = res.sort((a, b) => b.id - a.id);
        this.ordersToDisplay = this.listOfOrders;
      },
      error: (err: any) => console.log(err),
    });
  }

  filter(value: string) {
    if (value === 'all') {
      this.ordersToDisplay = this.listOfOrders.filter((value) => value);
    } else if (value === 'pen') {
      this.ordersToDisplay = this.listOfOrders.filter(
        (value) => value.returned == false
      );
    } else {
      this.ordersToDisplay = this.listOfOrders.filter(
        (value) => value.returned
      );
    }
  }
}
