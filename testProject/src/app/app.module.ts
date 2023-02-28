import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HighChartsComponent } from './high-charts/high-charts.component';
import { TasksTableComponent } from './tasks-table/tasks-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HighChartsComponent,
    TasksTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
