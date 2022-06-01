import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './page/home/home.component';
import { TodayComponent } from './page/tasks/today/today.component';
import { OpenComponent } from './page/tasks/open/open.component';
import { FutureComponent } from './page/tasks/future/future.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodayComponent,
    HomeComponent,
    OpenComponent,
    FutureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
