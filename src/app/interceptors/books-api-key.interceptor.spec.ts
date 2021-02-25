import { TestBed } from '@angular/core/testing';

import { BooksApiKeyInterceptor } from './books-api-key.interceptor';

describe('BooksApiKeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BooksApiKeyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BooksApiKeyInterceptor = TestBed.inject(BooksApiKeyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
