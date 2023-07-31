import { Component } from '@angular/core';
import { FeedService } from './feed.service';
import settings from './settings.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'master-list-angular-app';
  items$ = this.feedService.getData('');

  constructor(protected feedService: FeedService) {}

  ngOnInit() {
    this.loadFeeds();
    setInterval(() => {
      this.loadFeeds();
    }, 30000);
  }

  loadFeeds() {
    const endpoints = settings.feeds.map((feed) => {
      return this.feedService.getData(feed.endpoint);
    });

    console.log(endpoints);
  }
}
