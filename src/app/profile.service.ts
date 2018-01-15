import { Injectable } from '@angular/core';
import { PROFILES } from '../test-profiles';
import { Profile } from './profiles/profile';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProfileService {

  constructor() { }

  getProfiles(): Observable<Profile[]>{
    return of(PROFILES);
  }
}
