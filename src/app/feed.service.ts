import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(protected http: HttpClient) {}

  getData(endpoint: string): Observable<any> {
    return this.http.get(endpoint);
  }
}
