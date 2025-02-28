import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    'assets/images/image1.jpg',
    'assets/images/image2.jpg',
    'assets/images/image3.jpg',
    'assets/images/image4.jpg'
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
