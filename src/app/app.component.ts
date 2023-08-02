import { AfterViewInit, Component } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { FeedService } from './feed.service';
import settings from './settings.json';

const ONE_MINUTE = 60000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'master-list-angular-app';
  feeds = settings.feeds.map((feed) => ({
    res$: interval(ONE_MINUTE).pipe(
      mergeMap(() => this.feedService.getData(feed.endpoint))
    ),
  }));
  date$ = new BehaviorSubject(new Date());

  constructor(protected feedService: FeedService) {}

  ngAfterViewInit(): void {
    setInterval(() => {
      this.date$.next(new Date());
    }, ONE_MINUTE);
  }
}
