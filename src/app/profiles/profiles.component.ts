import { Component, OnInit } from '@angular/core';
import { PROFILES } from '../../test-profiles';
import { Profile } from './profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  
  profiles = PROFILES;
  selectedProfile: Profile;

  constructor() { 
    console.log('constructor invoked');
  }

  ngOnInit() {
    console.log('after init');
  }

  onSelect(profile: Profile): void {
    this.selectedProfile = profile;
    console.log(profile);
  }
}
