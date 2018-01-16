import { Injectable } from '@angular/core';
import { PROFILES } from '../test-profiles';
import { Profile } from './profiles/profile';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class ProfileService {

  constructor(private messageService: MessageService) { }

  getProfiles(): Observable<Profile[]>{
    this.messageService.add('ProfileService: Fetching profiles');
    return of(PROFILES);
  }

  getProfile(id: number): Observable<Profile> {
    this.messageService.add('ProfileService: Fetching profile with id - ' + id);
    return of(PROFILES.find(item => item.id === id));
  }

}
