import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  lastUpdate = new Date();

  @Input() postTitle !: string;
  @Input() postComment !: string;
  @Input() postStatus !: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  getStatus() {
    return this.postStatus;
  }

  onLike() {
    console.log('JAIME');
    // @ts-ignore
    document.getElementById('carte').style.backgroundColor = 'green';
  }

  onDislike(){
    console.log('JAIME PAS');
    // @ts-ignore
    document.getElementById('carte').style.backgroundColor = 'red';
  }
}
