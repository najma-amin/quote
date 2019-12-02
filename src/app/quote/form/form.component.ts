import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0,"","",new Date());
  constructor() { }

  ngOnInit() {
  }

}