import { Injectable } from '@angular/core';
import {DataService} from './services/data.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService{

  constructor(http: Http) {
    super(`https://api.github.com/users/mosh-hamedani/followers`, http);
  }
}
