import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  @Input() quote: Quote;

  constructor() { }

  ngOnInit() {
  }

}
