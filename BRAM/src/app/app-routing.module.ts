import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { TodayComponent } from './page/tasks/today/today.component';
import { OpenComponent } from './page/tasks/open/open.component';
import { FutureComponent } from './page/tasks/future/future.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'today', component: TodayComponent },
  { path: 'open', component: OpenComponent },
  { path: 'future', component: FutureComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
