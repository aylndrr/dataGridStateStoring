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

export class Customer {
  ID: number;
  CompanyName: string;
  Address: string;
  City: string;
  State: string;
  Zipcode: number;
  Phone: string;
  Fax: string;
  Website: string;
  Age: number;
}

const orders: Order[] = [{
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

const customers: Customer[] = [{
  ID: 1,
  CompanyName: 'Super Mart of the West',
  Address: '702 SW 8th Street',
  City: 'Bentonville',
  State: 'Arkansas',
  Zipcode: 72716,
  Phone: '(800) 555-2797',
  Fax: '(800) 555-2171',
  Website: 'http://www.nowebsitesupermart.com',
  Age: 29
}, {
  ID: 2,
  CompanyName: 'Electronics Depot',
  Address: '2455 Paces Ferry Road NW',
  City: 'Atlanta',
  State: 'Georgia',
  Zipcode: 30339,
  Phone: '(800) 595-3232',
  Fax: '(800) 595-3231',
  Website: 'http://www.nowebsitedepot.com',
  Age: 33
}, {
  ID: 3,
  CompanyName: 'K&S Music',
  Address: '1000 Nicllet Mall',
  City: 'Minneapolis',
  State: 'Minnesota',
  Zipcode: 55403,
  Phone: '(612) 304-6073',
  Fax: '(612) 304-6074',
  Website: 'http://www.nowebsitemusic.com',
  Age: 45
}, {
  ID: 4,
  CompanyName: 'Tom\'s Club',
  Address: '999 Lake Drive',
  City: 'Issaquah',
  State: 'Washington',
  Zipcode: 98027,
  Phone: '(800) 955-2292',
  Fax: '(800) 955-2293',
  Website: 'http://www.nowebsitetomsclub.com',
  Age: 27
}, {
  ID: 5,
  CompanyName: 'E-Mart',
  Address: '3333 Beverly Rd',
  City: 'Hoffman Estates',
  State: 'Illinois',
  Zipcode: 60179,
  Phone: '(847) 286-2500',
  Fax: '(847) 286-2501',
  Website: 'http://www.nowebsiteemart.com',
  Age: 58
}, {
  ID: 6,
  CompanyName: 'Walters',
  Address: '200 Wilmot Rd',
  City: 'Deerfield',
  State: 'Illinois',
  Zipcode: 60015,
  Phone: '(847) 940-2500',
  Fax: '(847) 940-2501',
  Website: 'http://www.nowebsitewalters.com',
  Age: 17
}, {
  ID: 7,
  CompanyName: 'StereoShack',
  Address: '400 Commerce S',
  City: 'Fort Worth',
  State: 'Texas',
  Zipcode: 76102,
  Phone: '(817) 820-0741',
  Fax: '(817) 820-0742',
  Website: 'http://www.nowebsiteshack.com',
  Age: 25
}, {
  ID: 8,
  CompanyName: 'Circuit Town',
  Address: '2200 Kensington Court',
  City: 'Oak Brook',
  State: 'Illinois',
  Zipcode: 60523,
  Phone: '(800) 955-2929',
  Fax: '(800) 955-9392',
  Website: 'http://www.nowebsitecircuittown.com',
  Age: 36
}, {
  ID: 9,
  CompanyName: 'Premier Buy',
  Address: '7601 Penn Avenue South',
  City: 'Richfield',
  State: 'Minnesota',
  Zipcode: 55423,
  Phone: '(612) 291-1000',
  Fax: '(612) 291-2001',
  Website: 'http://www.nowebsitepremierbuy.com',
  Age: 10
}, {
  ID: 10,
  CompanyName: 'ElectrixMax',
  Address: '263 Shuman Blvd',
  City: 'Naperville',
  State: 'Illinois',
  Zipcode: 60563,
  Phone: '(630) 438-7800',
  Fax: '(630) 438-7801',
  Website: 'http://www.nowebsiteelectrixmax.com',
  Age: 78
}, {
  ID: 11,
  CompanyName: 'Video Emporium',
  Address: '1201 Elm Street',
  City: 'Dallas',
  State: 'Texas',
  Zipcode: 75270,
  Phone: '(214) 854-3000',
  Fax: '(214) 854-3001',
  Website: 'http://www.nowebsitevideoemporium.com',
  Age: 52
}, {
  ID: 12,
  CompanyName: 'Screen Shop',
  Address: '1000 Lowes Blvd',
  City: 'Mooresville',
  State: 'North Carolina',
  Zipcode: 28117,
  Phone: '(800) 445-6937',
  Fax: '(800) 445-6938',
  Website: 'http://www.nowebsitescreenshop.com',
  Age: 65
}];


@Injectable()
export class Service {
  getOrders() {
    return orders;
  }

  getCustomers() {
    return customers;
  }
}
