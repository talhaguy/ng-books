import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { BookResult } from 'src/app/models/BookResult';
import { BooksVolumeSearchRepsonse } from 'src/app/models/BooksVolumeSearchResponse';
import { BookDataConverterService } from 'src/app/services/book-data-converter.service';
import { BooksApiService } from 'src/app/services/books-api.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'],
})
export class ResultsPageComponent implements OnInit {
  totalResults = 0;
  searchResults: BookResult[] = [];

  constructor(
    private booksApiService: BooksApiService,
    private bookDataConverterService: BookDataConverterService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {}

  onSearch() {
    this.booksApiService
      .getLastSearchResponse()
      .pipe(
        take(1),
        tap((data) => {
          this.totalResults = data ? data.totalItems : 0;
        }),
        map((data) =>
          this.bookDataConverterService.convertVolumesSearchToBookResult(data)
        ),
        tap((data) => {
          this.searchResults = data;
        })
      )
      .subscribe(console.log);
  }

  onNewPage(data: BooksVolumeSearchRepsonse) {
    this.searchResults = this.bookDataConverterService.convertVolumesSearchToBookResult(
      data
    );

    this.document.defaultView?.scrollTo(0, 0);
  }
}
