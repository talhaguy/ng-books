export interface BooksVolumeSearchRepsonse {
  totalItems: number;
  items: BooksVolumeSearchRepsonseBook[];
}

export interface BooksVolumeSearchRepsonseBook {
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  saleInfo: {
    country: string;
  };
  accessInfo: {
    country: string;
    epub: {
      isAvailable: boolean;
    };
    pdf: {
      isAvailable: boolean;
    };
    accessViewStatus: string;
  };
  searchInfo: {
    textSnippet: string;
  };
}
