import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { BooksVolumeSearchRepsonse } from 'src/app/models/BooksVolumeSearchResponse';
import { BooksApiService } from 'src/app/services/books-api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() totalResults = 0;
  @Output() onNewPage = new EventEmitter<BooksVolumeSearchRepsonse>();

  constructor(private booksApiService: BooksApiService) {}

  ngOnInit(): void {}

  onPageChange(event: {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
  }) {
    console.log(event);
    this.booksApiService
      .search(this.booksApiService.getLastSearchTerm(), event.first)
      .pipe(take(1))
      .subscribe((data) => {
        this.onNewPage.emit(data);
      });
  }
}
