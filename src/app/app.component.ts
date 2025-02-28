import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VisitorCounterComponent } from "./visitor-counter/visitor-counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, VisitorCounterComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
