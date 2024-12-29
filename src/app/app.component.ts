import { Component } from '@angular/core';
import { Ipost } from './models/posts';
import { posts } from './constant/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mt';
  postsArr:Array<Ipost>=posts;
}
