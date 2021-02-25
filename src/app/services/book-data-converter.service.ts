import { Injectable } from '@angular/core';
import { BookResult } from '../models/BookResult';
import { BooksVolumeSearchRepsonse } from '../models/BooksVolumeSearchResponse';

@Injectable({
  providedIn: 'root',
})
export class BookDataConverterService {
  constructor() {}

  convertVolumesSearchToBookResult(data: BooksVolumeSearchRepsonse | null) {
    if (!data) return [];

    const bookResults: BookResult[] = data.items.map((item) => {
      return {
        id: item.id,
        thumbnail: item.volumeInfo.imageLinks?.smallThumbnail,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        shortDescription: item.searchInfo?.textSnippet,
        link: item.volumeInfo.canonicalVolumeLink,
      };
    });

    return bookResults;
  }
}
