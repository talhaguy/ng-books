import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { ResultsPageComponent } from './components/results-page/results-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { BookResultComponent } from './components/book-result/book-result.component';
import { BooksApiKeyInterceptor } from './interceptors/books-api-key.interceptor';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    ResultsPageComponent,
    SearchInputComponent,
    BookResultComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    PaginatorModule,
    ToastModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BooksApiKeyInterceptor,
      multi: true,
    },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
