import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { GalleryComponent } from './app/pages/gallery/gallery.component';
import { VideosComponent } from './app/pages/videos/videos.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { AppRoutingModule } from './app/app-routing.module';

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
