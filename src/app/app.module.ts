import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DxButtonModule, DxDataGridModule, DxDropDownBoxModule, DxFormModule, DxPopupModule, DxSelectBoxModule} from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';


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
    DxDropDownBoxModule,
    DxButtonModule,
    DxFormModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
