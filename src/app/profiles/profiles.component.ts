import { Component, OnInit } from '@angular/core';
// import { PROFILES } from '../../test-profiles';
import { ProfileService } from '../profile.service';
import { Profile } from './profile';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  
  profiles: Profile[];
  selectedProfile: Profile;

  constructor(private profileService: ProfileService, private messageService: MessageService) {}

  getProfiles(): void{
    this.profileService.getProfiles().subscribe(profiles => this.profiles = profiles);
  }

  ngOnInit() {
    this.getProfiles();
    console.log('after init');
  }

  onSelect(profile: Profile): void {
    this.messageService.add("Editing profile with id - " + profile.id);
    this.selectedProfile = profile;
  }
}
