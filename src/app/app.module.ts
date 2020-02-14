import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DxDataGridModule, DxDropDownBoxModule, DxPopupModule, DxSelectBoxModule} from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxPopupModule,
    DxSelectBoxModule,
    DxDropDownBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
