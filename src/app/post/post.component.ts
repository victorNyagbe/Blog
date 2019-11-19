import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  loveIts = 0;
  created_at: Date;

  constructor() {
    setTimeout(
      () => {
        this.created_at = new Date();
      },200
    );
  }

  public getLove() {
   this.loveIts = this.loveIts + 1 ;

   return this.loveIts;
  }

  public dontGetLove(){
    this.loveIts = this.loveIts - 1 ;

    return this.loveIts;
  }

  ngOnInit() {
  }

}
