import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'] // Itt az SCSS fájlra hivatkozunk
})
export class GalleryComponent {
  images = [
    
    'assets/images/image2.jpg',
    'assets/images/image3.jpg',
    'assets/images/image4.jpg',
    'assets/images/image5.jpg',
    'assets/images/image6.jpg',
    'assets/images/image7.jpg',
    'assets/images/image8.jpg',
    'assets/images/image9.jpg',
    'assets/images/image10.jpg',
    'assets/images/image11.jpg',
    'assets/images/image12.jpg',
    'assets/images/image13.jpg',
    'assets/images/image14.jpg',
    'assets/images/image15.jpg',
    'assets/images/image16.jpg',
    'assets/images/image17.jpg',
    'assets/images/image18.jpg',
    'assets/images/image19.jpg',
    'assets/images/image20.jpg',
    'assets/images/image21.jpg',
    'assets/images/image22.jpg',
    
  ];
  selectedImage: string | null = null;
  currentIndex: number = 0;

  openImage(index: number): void {
    this.currentIndex = index;
    this.selectedImage = this.images[index];
  }

  closeImage(): void {
    this.selectedImage = null;
  }

  prevImage(): void {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
    this.selectedImage = this.images[this.currentIndex];
  }

  nextImage(): void {
    this.currentIndex = this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
    this.selectedImage = this.images[this.currentIndex];
  }
}
