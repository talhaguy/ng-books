import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { BehaviorSubject, of } from 'rxjs';
import {
  catchError,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  tap,
} from 'rxjs/operators';
import { ApiUrl } from '../constants/ApiUrl';
import { BooksVolumeSearchRepsonse } from '../models/BooksVolumeSearchResponse';

@Injectable({
  providedIn: 'root',
})
export class BooksApiService {
  private lastSearchResponse = new BehaviorSubject<BooksVolumeSearchRepsonse | null>(
    null
  );
  private lastSearchTerm = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  search(term: string, startIndex: number = 0) {
    return this.http
      .get<BooksVolumeSearchRepsonse>(ApiUrl.Volume, {
        params: {
          q: term,
          projection: 'lite',
          startIndex: startIndex + '',
        },
      })
      .pipe(
        tap((data) => {
          this.lastSearchResponse.next(data);
          this.lastSearchTerm.next(term);
        }),
        catchError((err) => {
          this.handleError(err);
          throw err;
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

  getLastSearchTerm() {
    return this.lastSearchTerm.value;
  }

  handleError(err: any) {
    const msg: Message = {
      severity: 'error',
      detail: err.message,
    };
    this.messageService.add(msg);
  }
}
