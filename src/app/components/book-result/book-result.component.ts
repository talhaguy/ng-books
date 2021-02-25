import { Component, Input, OnInit } from '@angular/core';
import { BookResult } from 'src/app/models/BookResult';

@Component({
  selector: 'app-book-result',
  templateUrl: './book-result.component.html',
  styleUrls: ['./book-result.component.scss'],
})
export class BookResultComponent implements OnInit {
  @Input() book?: BookResult;

  constructor() {}

  ngOnInit(): void {}
}
