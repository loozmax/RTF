import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { NewsModule } from './all-newspapers-layout/all-news/news/news.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperModule } from './wrapper/wrapper/wrapper/wrapper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsModule,
    WrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
