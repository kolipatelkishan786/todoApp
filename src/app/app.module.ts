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

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
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
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
