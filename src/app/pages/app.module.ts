import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '..//app-routing.module';
import { HomeComponent } from '../pages/home/home.component';
import { GalleryComponent } from '../pages/gallery/gallery.component';
import { VideosComponent } from '../pages/videos/videos.component';
import { ContactComponent } from '../pages/contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HomeComponent,
    GalleryComponent,
    VideosComponent,
    ContactComponent
  ]
})
export class AppModule { }
