import {Component} from '@angular/core';
import {Customer, Order, Service} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service]
})


export class AppComponent {
  orders: Order[];
  customers: Customer[];
  datafields: string [] = [];

  constructor(private service: Service) {
    this.orders = service.getOrders();
    this.customers = service.getCustomers();
  }

  SaveState = (state) => {
    console.log(state);
    console.log(JSON.stringify(state));
  };

  addMenuItems(e) {
    if (e.target === 'header') {
      // e.items can be undefined
      if (!e.items) {
        e.items = [];
      }

      // Add a custom menu item
      e.items.push({
        text: 'Log Column Caption',
        onItemClick: (dataField: string) => {
          console.log(e.column.dataField);
          this.datafields.push(e.column.dataField);
        }
      });
    }
  }
}
