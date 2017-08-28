import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideoCategoriesComponent } from './video-categories/video-categories.component';
import { RecentVideosComponent } from './recent-videos/recent-videos.component';
import { VideosComponent } from './videos/videos.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoCategoriesComponent,
    RecentVideosComponent,
    VideosComponent,
    SearchComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
