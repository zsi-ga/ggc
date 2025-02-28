import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-counter',
  templateUrl: './visitor-counter.component.html',
  styleUrls: ['./visitor-counter.component.css']
})
export class VisitorCounterComponent implements OnInit {
  visitorCount: number = 0;

  constructor() {}

  ngOnInit(): void {
    
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedCount = localStorage.getItem('visitorCount');
      if (storedCount) {
        this.visitorCount = parseInt(storedCount, 10);
      } else {
        this.visitorCount = 0;
      }

      
      this.incrementVisitorCount();
    }
  }

  incrementVisitorCount() {
    this.visitorCount += 1;

    
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('visitorCount', this.visitorCount.toString());
    }
  }
}
