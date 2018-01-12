import { Component, OnInit } from '@angular/core';
import {Profile} from './profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor() { }

  profile: Profile = {
    id: 1,
    name: "TestProfile"
  };

  ngOnInit() {
    console.log('after init');
  }

}
