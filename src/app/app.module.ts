import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DOCS_ROUTES } from './routes';
import { HomepageModule } from './pages/homepage';
import { FormsModule } from '@angular/forms';
import { NavBarModule } from './shared/navbar';
import { HttpClientModule } from '@angular/common/http';
import { BarChartModule } from './pages/barchart';
import { PiechartModule } from './pages/piechart';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(DOCS_ROUTES),
    NavBarModule,
    HomepageModule,
    BarChartModule,
    PiechartModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
