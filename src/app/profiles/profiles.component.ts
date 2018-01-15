import { Component, OnInit } from '@angular/core';
// import { PROFILES } from '../../test-profiles';
import { ProfileService } from '../profile.service';
import { Profile } from './profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  
  profiles: Profile[];
  selectedProfile: Profile;

  constructor(private profileService: ProfileService) { 
    console.log('constructor invoked');
  }

  getProfiles(): void{
    this.profileService.getProfiles().subscribe(profiles => this.profiles = profiles);
  }

  ngOnInit() {
    this.getProfiles();
    console.log('after init');
  }

  onSelect(profile: Profile): void {
    this.selectedProfile = profile;
    console.log(profile);
  }
}
