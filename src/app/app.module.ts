import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileService } from '../app/profile.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    SiteMenuComponent,
    ProfileDetailsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ ProfileService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
