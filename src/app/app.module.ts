import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsPageComponent } from './components/results-page/results-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { BookResultComponent } from './components/book-result/book-result.component';

@NgModule({
  declarations: [AppComponent, ResultsPageComponent, SearchInputComponent, BookResultComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
