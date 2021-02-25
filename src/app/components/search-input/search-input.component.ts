import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BooksApiService } from 'src/app/services/books-api.service';
import { map } from 'rxjs/operators';
import { AutoComplete } from 'primeng/autocomplete';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Output() onSearch = new EventEmitter();
  @ViewChild('autoComplete') autoComplete?: AutoComplete;

  searchTerm = '';
  results: Result[] = [];

  private areResultsVisible = false;

  constructor(private booksApiService: BooksApiService) {}

  ngOnInit(): void {}

  search({ query }: { query: string }) {
    console.log('search');
    this.booksApiService
      .search(query)
      .pipe(
        map((data) => {
          return data.items.reduce((accum, next) => {
            accum.push({
              title: next.volumeInfo.title,
              url: next.volumeInfo.canonicalVolumeLink,
            });
            return accum;
          }, [] as Result[]);
        })
      )
      .subscribe((data) => {
        this.results = data;
      });
  }

  select(value: Result) {
    console.log('selected ' + value.url);
  }

  submit() {
    console.log('submit');
    this.onSearch.emit();
  }

  onKeyUp(event: KeyboardEvent) {
    if (this.areResultsVisible && event.key === 'Enter') {
      this.submit();
      this.autoComplete?.hide();
    }
  }

  onShow() {
    this.areResultsVisible = true;
  }

  onHide() {
    this.areResultsVisible = false;
  }
}

interface Result {
  title: string;
  url: string;
}
