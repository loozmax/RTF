import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsModule } from './all-newspapers-layout/all-news/news/news.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModule } from './test-component-for-shadrin/test-component-for-shadrin.module';
import { WrapperModule } from './wrapper/wrapper/wrapper/wrapper.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsModule,
    WrapperModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
