import {Injectable} from '@angular/core';

export class Order {
  ID: number;
  OrderNumber: number;
  OrderDate: Date;
  SaleAmount: number;
  Terms: string;
  TotalAmount: number;
  CustomerStoreState: string;
  CustomerStoreCity: string;
  Employee: string;
}

export class GridState {
  Description: string;
  StateData: string;
}

export class ToolbarButtons {
  name: string;
  value: number;
  icon: string;
}

export const toolbarButtons = [
  {name: 'Görünüm kaydet', value: 1, icon: 'save' },
  {name: 'Görünüm seç', value: 2, icon: 'mediumiconslayout'}
];

export const orders: Order[] = [{
  ID: 1,
  OrderNumber: 35703,
  OrderDate: new Date(2014, 3, 10),
  SaleAmount: 11800,
  Terms: '15 Days',
  TotalAmount: 12175,
  CustomerStoreState: 'California',
  CustomerStoreCity: 'Los Angeles',
  Employee: 'Harv Mudd'
}, {
  ID: 4,
  OrderNumber: 35711,
  OrderDate: new Date(2014, 0, 12),
  SaleAmount: 16050,
  Terms: '15 Days',
  TotalAmount: 16550,
  CustomerStoreState: 'California',
  CustomerStoreCity: 'San Jose',
  Employee: 'Jim Packard'
}, {
  ID: 5,
  OrderNumber: 35714,
  OrderDate: new Date(2014, 0, 22),
  SaleAmount: 14750,
  Terms: '15 Days',
  TotalAmount: 15250,
  CustomerStoreState: 'Nevada',
  CustomerStoreCity: 'Las Vegas',
  Employee: 'Harv Mudd'
}, {
  ID: 7,
  OrderNumber: 35983,
  OrderDate: new Date(2014, 1, 7),
  SaleAmount: 3725,
  Terms: '15 Days',
  TotalAmount: 3850,
  CustomerStoreState: 'Colorado',
  CustomerStoreCity: 'Denver',
  Employee: 'Todd Hoffman'
}, {
  ID: 9,
  OrderNumber: 36987,
  OrderDate: new Date(2014, 2, 11),
  SaleAmount: 14200,
  Terms: '15 Days',
  TotalAmount: 14800,
  CustomerStoreState: 'Utah',
  CustomerStoreCity: 'Salt Lake City',
  Employee: 'Clark Morgan'
}, {
  ID: 11,
  OrderNumber: 38466,
  OrderDate: new Date(2014, 2, 1),
  SaleAmount: 7800,
  Terms: '15 Days',
  TotalAmount: 8200,
  CustomerStoreState: 'California',
  CustomerStoreCity: 'Los Angeles',
  Employee: 'Harv Mudd'
}, {
  ID: 14,
  OrderNumber: 39420,
  OrderDate: new Date(2014, 1, 15),
  SaleAmount: 20500,
  Terms: '15 Days',
  TotalAmount: 9100,
  CustomerStoreState: 'California',
  CustomerStoreCity: 'San Jose',
  Employee: 'Jim Packard'
}, {
  ID: 15,
  OrderNumber: 39874,
  OrderDate: new Date(2014, 1, 4),
  SaleAmount: 9050,
  Terms: '30 Days',
  TotalAmount: 19100,
  CustomerStoreState: 'Nevada',
  CustomerStoreCity: 'Las Vegas',
  Employee: 'Harv Mudd'
}, {
  ID: 18,
  OrderNumber: 42847,
  OrderDate: new Date(2014, 1, 15),
  SaleAmount: 20400,
  Terms: '30 Days',
  TotalAmount: 20800,
  CustomerStoreState: 'Wyoming',
  CustomerStoreCity: 'Casper',
  Employee: 'Todd Hoffman'
}, {
  ID: 19,
  OrderNumber: 43982,
  OrderDate: new Date(2014, 4, 29),
  SaleAmount: 6050,
  Terms: '30 Days',
  TotalAmount: 6250,
  CustomerStoreState: 'Utah',
  CustomerStoreCity: 'Salt Lake City',
  Employee: 'Clark Morgan'
}, {
  ID: 29,
  OrderNumber: 56272,
  OrderDate: new Date(2014, 1, 6),
  SaleAmount: 15850,
  Terms: '30 Days',
  TotalAmount: 16350,
  CustomerStoreState: 'Utah',
  CustomerStoreCity: 'Salt Lake City',
  Employee: 'Clark Morgan'
}, {
  ID: 30,
  OrderNumber: 57429,
  OrderDate: new Date(2013, 11, 31),
  SaleAmount: 11050,
  Terms: '30 Days',
  TotalAmount: 11400,
  CustomerStoreState: 'Arizona',
  CustomerStoreCity: 'Phoenix',
  Employee: 'Clark Morgan'
}, {
  ID: 32,
  OrderNumber: 58292,
  OrderDate: new Date(2014, 4, 13),
  SaleAmount: 13500,
  Terms: '15 Days',
  TotalAmount: 13800,
  CustomerStoreState: 'California',
  CustomerStoreCity: 'Los Angeles',
  Employee: 'Harv Mudd'
}, {
  ID: 36,
  OrderNumber: 62427,
  OrderDate: new Date(2014, 0, 27),
  SaleAmount: 23500,
  Terms: '15 Days',
  TotalAmount: 24000,
  CustomerStoreState: 'Nevada',
  CustomerStoreCity: 'Las Vegas',
  Employee: 'Harv Mudd'
}, {
  ID: 39,
  OrderNumber: 65977,
  OrderDate: new Date(2014, 1, 5),
  SaleAmount: 2550,
  Terms: '15 Days',
  TotalAmount: 2625,
  CustomerStoreState: 'Wyoming',
  CustomerStoreCity: 'Casper',
  Employee: 'Todd Hoffman'
}, {
  ID: 40,
  OrderNumber: 66947,
  OrderDate: new Date(2014, 2, 23),
  SaleAmount: 3500,
  Terms: '15 Days',
  TotalAmount: 3600,
  CustomerStoreState: 'Utah',
  CustomerStoreCity: 'Salt Lake City',
  Employee: 'Clark Morgan'
}, {
  ID: 42,
  OrderNumber: 68428,
  OrderDate: new Date(2014, 3, 10),
  SaleAmount: 10500,
  Terms: '15 Days',
  TotalAmount: 10900,
  CustomerStoreState: 'California',
  CustomerStoreCity: 'Los Angeles',
  Employee: 'Harv Mudd'
}, {
  ID: 43,
  OrderNumber: 69477,
  OrderDate: new Date(2014, 2, 9),
  SaleAmount: 14200,
  Terms: '15 Days',
  TotalAmount: 14500,
  CustomerStoreState: 'California',
  CustomerStoreCity: 'Anaheim',
  Employee: 'Harv Mudd'
}, {
  ID: 46,
  OrderNumber: 72947,
  OrderDate: new Date(2014, 0, 14),
  SaleAmount: 13350,
  Terms: '30 Days',
  TotalAmount: 13650,
  CustomerStoreState: 'Nevada',
  CustomerStoreCity: 'Las Vegas',
  Employee: 'Harv Mudd'
}, {
  ID: 47,
  OrderNumber: 73088,
  OrderDate: new Date(2014, 2, 25),
  SaleAmount: 8600,
  Terms: '30 Days',
  TotalAmount: 8850,
  CustomerStoreState: 'Nevada',
  CustomerStoreCity: 'Reno',
  Employee: 'Clark Morgan'
}, {
  ID: 50,
  OrderNumber: 76927,
  OrderDate: new Date(2014, 3, 27),
  SaleAmount: 9800,
  Terms: '30 Days',
  TotalAmount: 10050,
  CustomerStoreState: 'Utah',
  CustomerStoreCity: 'Salt Lake City',
  Employee: 'Clark Morgan'
}, {
  ID: 51,
  OrderNumber: 77297,
  OrderDate: new Date(2014, 3, 30),
  SaleAmount: 10850,
  Terms: '30 Days',
  TotalAmount: 11100,
  CustomerStoreState: 'Arizona',
  CustomerStoreCity: 'Phoenix',
  Employee: 'Clark Morgan'
}];

export const gridStates: GridState[] = [{
  Description: 'Default View',
  StateData: '{"columns":[{"visibleIndex":1,"dataField":"OrderNumber","dataType":"number","width":130,"visible":true},{"visibleIndex":0,"dataField":"OrderDate","dataType":"date","visible":true,"sortOrder":"desc","sortIndex":0},{"visibleIndex":3,"dataField":"SaleAmount","dataType":"number","visible":true},{"visibleIndex":2,"dataField":"Employee","dataType":"string","visible":true},{"visibleIndex":4,"dataField":"CustomerStoreCity","dataType":"string","visible":true},{"visibleIndex":5,"dataField":"CustomerStoreState","dataType":"string","visible":true,"groupIndex":0}],"allowedPageSizes":[5,10,20],"filterPanel":{"filterEnabled":true},"filterValue":null,"searchText":"","pageIndex":0,"pageSize":20,"footerGroups":[]}'
}];

@Injectable()
export class Service {
  getOrders() {
    return orders;
  }

  getGridStates() {
    return gridStates;
  }

  getToolbarButtons() {
    return toolbarButtons;
  }
}
