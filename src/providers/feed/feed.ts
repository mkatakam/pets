import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the FeedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeedProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FeedProvider Provider');
  }
  getFeed(){
    return this.http.get("http://dev-test.hews.com.au/people.json").map(res => res);
  }
}
