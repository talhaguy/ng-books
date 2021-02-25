import { Component, OnInit } from '@angular/core';
import { BooksApiService } from 'src/app/services/books-api.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'],
})
export class ResultsPageComponent implements OnInit {
  constructor(private booksApiService: BooksApiService) {}

  ngOnInit(): void {}

  onSearch() {
    console.log('search');
    this.booksApiService.getLastSearchResponse().subscribe(console.log);
  }
}
