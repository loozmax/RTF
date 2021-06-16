import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewsModule } from './all-newspapers-layout/all-news/news/news.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperModule } from './wrapper/wrapper/wrapper/wrapper.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsModule,
    WrapperModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
