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
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    SiteMenuComponent,
    ProfileDetailsComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ ProfileService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
