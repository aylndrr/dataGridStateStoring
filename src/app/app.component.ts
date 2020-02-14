import {Component, ViewChild} from '@angular/core';
import {GridState, Order, Service} from './app.service';
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
  gridStateRemote: string = '{"columns":[{"visibleIndex":1,"dataField":"OrderNumber","dataType":"number","width":130,"visible":true},{"visibleIndex":0,"dataField":"OrderDate","dataType":"date","visible":true,"sortOrder":"desc","sortIndex":0},{"visibleIndex":3,"dataField":"SaleAmount","dataType":"number","visible":true},{"visibleIndex":2,"dataField":"Employee","dataType":"string","visible":true},{"visibleIndex":4,"dataField":"CustomerStoreCity","dataType":"string","visible":true},{"visibleIndex":5,"dataField":"CustomerStoreState","dataType":"string","visible":true,"groupIndex":0}],"allowedPageSizes":[5,10,20],"filterPanel":{"filterEnabled":true},"filterValue":null,"searchText":"","pageIndex":0,"pageSize":20,"footerGroups":[{"dataField":"SaleAmount","type":"sum"},{"dataField":"SaleAmount","type":"count"},{"dataField":"CustomerStoreCity","type":"count"}]}';
  gridState: any;
  viewPopupVisible = false;
  savePopupVisible = false;
  dropdownValue: string;
  orders: Order[];
  summaryFields: FooterSummaryColumn[] = [];
  dxSelectItems: GridState[] = [];
  toolbarButtons: string[];
  @ViewChild('dataGrid', {static: false}) dataGrid: DxDataGridComponent;

  constructor(private service: Service) {
    this.orders = service.getOrders();
    this.gridState = JSON.parse(this.gridStateRemote);
    this.dxSelectItems = service.getGridStates();
    this.dropdownValue = this.dxSelectItems[0].Description;
    this.toolbarButtons = service.getToolbarButtons();
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
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

      this.summaryFields = [...this.summaryFields.filter(f => f.dataField !== exists.dataField), ...this.summaryFields.filter(f => f.type !== exists.type)].filter(onlyUnique);
      console.log(this.summaryFields);
    }
  }

  gridToolbarPreparing(e) {
    e.toolbarOptions.items.unshift({
      location: 'after',
      widget: 'dxDropDownButton',
      options: {
        icon: 'overflow',
        showArrowIcon: false,
        useSelectMode: false,
        items: this.toolbarButtons
      }
    });
  }

  showViewPopup() {
    console.log('asd');
    this.viewPopupVisible = true;
  }

  showSavePopup() {
    console.log('das');
    this.savePopupVisible = true;
  }

  onItemClick(e) {
    if (e.itemData.name === 'Görünüm kaydet') {
      this.savePopupVisible = true;
    } else if (e.itemData.name === 'Görünüm seç') {
      this.viewPopupVisible = true;
    }
  }
}
