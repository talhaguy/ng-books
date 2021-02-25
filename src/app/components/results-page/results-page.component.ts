import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { BookResult } from 'src/app/models/BookResult';
import { BookDataConverterService } from 'src/app/services/book-data-converter.service';
import { BooksApiService } from 'src/app/services/books-api.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'],
})
export class ResultsPageComponent implements OnInit {
  searchResults: BookResult[] = [];

  constructor(
    private booksApiService: BooksApiService,
    private bookDataConverterService: BookDataConverterService
  ) {}

  ngOnInit(): void {}

  onSearch() {
    this.booksApiService
      .getLastSearchResponse()
      .pipe(
        take(1),
        map((data) =>
          this.bookDataConverterService.convertVolumesSearchToBookResult(data)
        ),
        tap((data) => {
          this.searchResults = data;
        })
      )
      .subscribe(console.log);
  }
}
