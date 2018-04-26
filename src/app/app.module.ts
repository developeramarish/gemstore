import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GemComponent } from './gem/gem.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AvatarService } from './avatar.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GemComponent,
    NavbarComponent,
    TabsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [AvatarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
