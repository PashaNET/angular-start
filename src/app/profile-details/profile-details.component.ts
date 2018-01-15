import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Profile } from '../profiles/profile';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  profile: Profile;

  constructor(
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.profileService.getProfile(id).subscribe(profile => this.profile = profile);
  }

  goBack(): void {
    this.location.back();
  }
}
