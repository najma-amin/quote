import { Component, OnInit } from '@angular/core';
import {Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes:Quote[] = [
    {id:1, name:'sam',description:''},
    {id:2,name:'',description:''},
    {id:3,name:'',description:''},
    {id:4,name:'',description:''},
    {id:5,name:'',description:''},
    {id:6,name:'',description:''},
  ];


ngOnInit() {}

}