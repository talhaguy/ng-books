import { TestBed } from '@angular/core/testing';

import { BookDataConverterService } from './book-data-converter.service';

describe('BookDataConverterService', () => {
  let service: BookDataConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDataConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
