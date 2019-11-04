import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TestService} from './testService';
import {GridModule, SharedModule} from '@progress/kendo-angular-grid';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from "@progress/kendo-angular-buttons";

import 'hammerjs';

import {ChartsModule} from "@progress/kendo-angular-charts";
import {ChartComponent} from './chart/chart.component';
import {ExcelExportModule} from "@progress/kendo-angular-excel-export";
import {ExcelComponent} from './excel/excel.component';
import {DropDownsModule} from "@progress/kendo-angular-dropdowns";
import { DropDownComponent } from './drop-down/drop-down.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ExcelComponent,
    DropDownComponent,
    DialogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
    SharedModule,
    ButtonModule,
    ChartsModule,
    ExcelExportModule,
    DropDownsModule,
    DialogsModule,
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
