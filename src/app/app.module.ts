import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileService } from '../app/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    SiteMenuComponent,
    ProfileDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ ProfileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
