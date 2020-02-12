import {Component, OnInit, ViewChild} from '@angular/core';
import {Order, Service} from './app.service';
import {DxDataGridComponent} from 'devextreme-angular';

export interface FooterSummaryColumn {
  dataField: string;
  type: 'sum' | 'min' | 'max' | 'avg' | 'count';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service]
})


export class AppComponent {

  // tslint:disable-next-line:max-line-length
  gridStateRemote: string = '{"columns":[{"visibleIndex":1,"dataField":"OrderNumber","dataType":"number","width":130,"visible":true},{"visibleIndex":0,"dataField":"OrderDate","dataType":"date","visible":true,"sortOrder":"desc","sortIndex":0},{"visibleIndex":3,"dataField":"SaleAmount","dataType":"number","visible":true},{"visibleIndex":2,"dataField":"Employee","dataType":"string","visible":true},{"visibleIndex":4,"dataField":"CustomerStoreCity","dataType":"string","visible":true},{"visibleIndex":5,"dataField":"CustomerStoreState","dataType":"string","visible":true,"groupIndex":0}],"allowedPageSizes":[5,10,20],"filterPanel":{"filterEnabled":true},"filterValue":null,"searchText":"","pageIndex":0,"pageSize":20,"footerGroups":[{"dataField":"SaleAmount","type":"sum"},{"dataField":"SaleAmount","type":"count"},{"dataField":"CustomerStoreCity","type":"count"}]}';
  gridState: any;

  orders: Order[];
  summaryFields: FooterSummaryColumn[] = [];
  @ViewChild('dataGrid', {static: false}) dataGrid: DxDataGridComponent;

  constructor(private service: Service) {
    this.orders = service.getOrders();

    this.gridState = JSON.parse(this.gridStateRemote);
  }

  loadState = () => {
    console.log(this.gridState);
    this.summaryFields = this.gridState.footerGroups;
    return this.gridState;
  };

  test() {
    const dataGridState: any = this.dataGrid.instance.state();
    dataGridState.footerGroups = [...this.summaryFields];
    console.log(JSON.stringify(dataGridState));
  }

  saveState = (state) => {
    // console.log(state);
    console.log(JSON.stringify(state));
  };

  addMenuItems($event: any) {
    if ($event.target === 'header') {
      // e.items can be undefined
      if (!$event.items) {
        $event.items = [];
      }
      const menuItem = {
        text: 'Footer',
        items: [
          {
            text: 'Sum',
            onItemClick: () => {
              this.addOrRemoveSummaryFields($event.column.dataField, 'sum');
            }
          },
          {
            text: 'Count',
            onItemClick: () => {
              this.addOrRemoveSummaryFields($event.column.dataField, 'count');
            }
          },
          {
            text: 'Avg',
            onItemClick: () => {
              this.addOrRemoveSummaryFields($event.column.dataField, 'avg');
            }
          },
          {
            text: 'Min',
            onItemClick: () => {
              this.addOrRemoveSummaryFields($event.column.dataField, 'min');
            }
          },
          {
            text: 'Max',
            onItemClick: () => {
              this.addOrRemoveSummaryFields($event.column.dataField, 'max');
            }
          }
        ]
      };
      $event.items.push(menuItem);
    }
  }

  addOrRemoveSummaryFields(columnDataField: string, columnDataFieldType: 'sum' | 'min' | 'max' | 'avg' | 'count'): void {
    const exists = this.summaryFields.find(f => f.dataField === columnDataField && f.type === columnDataFieldType);
    if (!exists) {
      this.summaryFields.push({
        dataField: columnDataField,
        type: columnDataFieldType
      });
    } else {
      console.log(this.summaryFields.filter(f => f.dataField === exists.dataField && f.type !== exists.type));
    }
  }
}
