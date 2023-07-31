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
  feeds = settings.feeds.map((feed) => ({
    res$: this.feedService.getData(feed.endpoint),
  }));

  constructor(protected feedService: FeedService) {}
}
