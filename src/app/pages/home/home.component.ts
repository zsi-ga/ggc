import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  showLogoModal: boolean = false;

 
  openLogoModal(): void {
    this.showLogoModal = true;
  }

  
  closeLogoModal(): void {
    this.showLogoModal = false;
  }
}
