import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import { HttpClientModule } from '@angular/common/http'
import { NewApiServiceService } from './services/new-api-service.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinesNewsComponent } from './busines-news/busines-news.component';
import { CarouselComponent } from './carousel/carousel.component'

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinesNewsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
