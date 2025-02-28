
import { Component } from '@angular/core';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {

  videos: string[] = [
    'kert.mp4',
    'medence.mp4',
    'video3.mp4'
  ];
}
