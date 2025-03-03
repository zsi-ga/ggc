import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  videos = [
    'assets/videos/kert.mp4',
    'assets/videos/medence.mp4'
  ];
}
