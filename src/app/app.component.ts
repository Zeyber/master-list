import { Component } from '@angular/core';

export interface ListItem {
  message?: string;
  description?: string;
  icon?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'master-list-angular-app';

  items: ListItem[] = [
    { message: 'Randall Smokes', description: 'hi', icon: '/assets/icon.png' },
    { message: 'Mikey House', description: 'hi', icon: '/assets/icon.png' },
    { message: 'Spamzee', description: 'hi', icon: '/assets/icon.png' },
    { message: 'Spamzee', description: 'hi', icon: '/assets/icon.png' },
    { message: 'Spamzee', description: 'hi', icon: '/assets/icon.png' },
  ];
}
