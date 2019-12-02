import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upvotes',
  templateUrl: './upvotes.component.html',
  styleUrls: ['./upvotes.component.css']
})
export class UpvotesComponent implements OnInit {

  likes =0;
  dislikes =0;
  upVotes(){
    this.likes++;
  }
  downVotes(){
    this.dislikes++;
  }
  constructor() { }

  ngOnInit() {
  }

}
