import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Order, Service, ToolbarButtons} from './app.service';
import {DxDataGridComponent, DxSelectBoxComponent} from 'devextreme-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface GridState {
  columns: Column[];
  allowedPageSizes: number[];
  filterPanel: FilterPanel;
  filterValue: null;
  searchText: string;
  pageIndex: number;
  pageSize: number;
  footerGroups: FooterSummaryColumn[];
}

export interface Column {
  visibleIndex: number;
  dataField: string;
  dataType: string;
  width?: number;
  visible: boolean;
  sortOrder?: string;
  sortIndex?: number;
  groupIndex?: number;
}

export interface FilterPanel {
  filterEnabled: boolean;
}

export interface FooterSummaryColumn {
  dataField: string;
  type: 'sum' | 'min' | 'max' | 'avg' | 'count';
}

export interface GridStates {
  stateId: number; // ~~(Math.random() * 100) + 1
  stateName: string;
  description: string;
  stateData: GridState;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service]
})

export class AppComponent {

  gridViewSaveForm: FormGroup;
  // gridStateRemote: string = '{"columns":[{"visibleIndex":1,"dataField":"OrderNumber","dataType":"number","width":130,"visible":true},{"visibleIndex":0,"dataField":"OrderDate","dataType":"date","visible":true,"sortOrder":"desc","sortIndex":0},{"visibleIndex":3,"dataField":"SaleAmount","dataType":"number","visible":true},{"visibleIndex":4,"dataField":"Employee","dataType":"string","visible":true},{"visibleIndex":5,"dataField":"CustomerStoreCity","dataType":"string","visible":true},{"visibleIndex":5,"dataField":"CustomerStoreState","dataType":"string","visible":true,"groupIndex":0}],"allowedPageSizes":[5,10,20],"filterPanel":{"filterEnabled":true},"filterValue":null,"searchText":"","pageIndex":0,"pageSize":20,"footerGroups":[]}';

  orders: Order[];

  currentGridState: GridState;
  gridStates: GridStates[] = [];

  summaryFields: FooterSummaryColumn[] = [];
  toolbarButtons: ToolbarButtons[];
  @ViewChild('dataGrid', {static: false}) dataGrid: DxDataGridComponent;
  @ViewChild('selectBox', {static: false}) selectBox: DxSelectBoxComponent;

  viewPopupVisible = false;
  savePopupVisible = false;
  alertSaveProcess = false;

  constructor(private service: Service, private formBuilder: FormBuilder) {
    this.orders = service.getOrders();
    this.toolbarButtons = service.getToolbarButtons();

    // tslint:disable-next-line:max-line-length
    this.gridStates = JSON.parse('[{"stateId":46,"stateName":"City Sonda","description":"asd","stateData":{"columns":[{"visibleIndex":1,"dataField":"OrderNumber","dataType":"number","width":130,"visible":true},{"visibleIndex":0,"dataField":"OrderDate","dataType":"date","visible":true,"sortOrder":"desc","sortIndex":0},{"visibleIndex":2,"dataField":"SaleAmount","dataType":"number","visible":true},{"visibleIndex":3,"dataField":"Employee","dataType":"string","visible":true},{"visibleIndex":5,"dataField":"CustomerStoreCity","dataType":"string","visible":true},{"visibleIndex":4,"dataField":"CustomerStoreState","dataType":"string","visible":true,"groupIndex":0}],"allowedPageSizes":[5,10,20],"filterPanel":{"filterEnabled":true},"filterValue":null,"searchText":"","pageIndex":0,"pageSize":20,"footerGroups":[]}},{"stateId":79,"stateName":"City Başta","description":"asd","stateData":{"columns":[{"visibleIndex":2,"dataField":"OrderNumber","dataType":"number","width":130,"visible":true},{"visibleIndex":1,"dataField":"OrderDate","dataType":"date","visible":true,"sortOrder":"desc","sortIndex":0},{"visibleIndex":3,"dataField":"SaleAmount","dataType":"number","visible":true},{"visibleIndex":4,"dataField":"Employee","dataType":"string","visible":true},{"visibleIndex":0,"dataField":"CustomerStoreCity","dataType":"string","visible":true},{"visibleIndex":5,"dataField":"CustomerStoreState","dataType":"string","visible":true,"groupIndex":0}],"allowedPageSizes":[5,10,20],"filterPanel":{"filterEnabled":true},"filterValue":null,"searchText":"","pageIndex":0,"pageSize":20,"footerGroups":[]}}]');
    this.currentGridState = this.gridStates[0].stateData;

    this.gridViewSaveForm = this.formBuilder.group({
      stateName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['']
    });
  }
  get gridViewSaveFormHolder() {
    return this.gridViewSaveForm.controls;
  }

  loadState = () => {
    this.summaryFields = this.currentGridState.footerGroups;
    return this.currentGridState;
  }

  saveState = (state) => {
    console.log(state);
  }

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
        items: this.toolbarButtons,
        displayExpr: 'name',
        dropDownOptions: {width: 200, position: {my: 'top', at: 'bottom left', of: '.dx-dropdownbutton', offset: {x: -60, y: 1}}},
        onItemClick: this.onItemClickGridAppearance.bind(this)
      }
    });
  }

  onItemClickGridAppearance($event) {
    console.log($event.itemData.name);
    if ($event.itemData.value === 1) {
      this.savePopupVisible = true;
      this.alertSaveProcess = false;
      this.gridViewSaveFormHolder.stateName.reset();
    } else if ($event.itemData.value === 2) {
      this.viewPopupVisible = true;
    }
  }

  Cancel() {
    if (this.viewPopupVisible === true) {
      this.viewPopupVisible = false;
    } else if (this.savePopupVisible === true) {
      this.savePopupVisible = false;
    }
  }

  viewStateSave() {
    const dataGridState: GridState = this.dataGrid.instance.state();
    dataGridState.footerGroups = [...this.summaryFields];

    const state: GridStates = {
      stateId: (~~(Math.random() * 100) + 1),
      stateName: this.gridViewSaveFormHolder.stateName.value,
      description: 'asd',
      stateData: dataGridState
    };

    this.gridStates.push(state);
    this.alertSaveProcess = true;

    console.log(JSON.stringify(this.gridStates));
  }

  viewStateSelect() {
    const stateId = this.selectBox.value;

    this.currentGridState = this.gridStates.find(x => x.stateId === stateId).stateData;
    this.dataGrid.instance.state(this.currentGridState);
    console.log(this.currentGridState);
    // this.loadState(this.currentGridState);
    this.viewPopupVisible = false;
  }
}
