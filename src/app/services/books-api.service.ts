import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { take, takeLast, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { ApiUrl } from '../constants/ApiUrl';
import { BooksVolumeSearchRepsonse } from '../models/BooksVolumeSearchResponse';

@Injectable({
  providedIn: 'root',
})
export class BooksApiService {
  private lastSearchResponse = new BehaviorSubject<BooksVolumeSearchRepsonse | null>(
    null
  );

  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http
      .get<BooksVolumeSearchRepsonse>(ApiUrl.Volume, {
        params: {
          q: term,
          projection: 'lite',
        },
      })
      .pipe(
        tap((data) => {
          this.lastSearchResponse.next(data);
        })
      );
  }

  getLastSearchResponse() {
    if (this.lastSearchResponse.value) {
      return of(this.lastSearchResponse.value);
    } else {
      return this.lastSearchResponse.pipe(
        takeWhile((data) => data === null, true),
        takeLast(1)
      );
    }
  }
}
