import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighChartsComponent } from './high-charts/high-charts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TasksTableComponent } from './tasks-table/tasks-table.component';

const routes: Routes = [ 
  {  path      : 'charts', component: HighChartsComponent},
  {  path      : 'tasksTable', component: TasksTableComponent},
  {  path      : '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
