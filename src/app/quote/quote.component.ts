import { Component, OnInit } from '@angular/core';
import {Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[] = [
    new Quote (1, 'posted on', 'Programs must be written for people to read, and only incidentally for machines to execute. ',new Date(2012,3,14)),
    new Quote(2,'posted on','I have to buy cookies for the parrot',new Date(2017,3,14)),
    new Quote(3,'posted on','Diana has her birthday coming up soon',new Date(2016,3,14)),
    new Quote(4,'posted on','Pupper likes expensive snacks',new Date(2018,3,14)),
    new Quote(5,'posted on','Damn Math',new Date(2019,3,14)),
    new Quote(6,'posted on','Cause I am an evil overlord',new Date(2013,3,14)),
  ];
  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }
constructor(){}


ngOnInit() {}


}