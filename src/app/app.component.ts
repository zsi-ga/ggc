import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VisitorCounterComponent } from "./visitor-counter/visitor-counter.component";

// Bootstrap globális objektum, hogy elérjük a Collapse API-t
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, VisitorCounterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  // A collapse elem referenciája
  @ViewChild('navbarNav') navbarNav!: ElementRef;
  private collapseInstance: any;

  ngAfterViewInit(): void {
    // Inicializáljuk a collapse elemet, toggle: false azt jelenti, hogy nem nyitjuk/bezárjuk automatikusan
    this.collapseInstance = new bootstrap.Collapse(this.navbarNav.nativeElement, { toggle: false });
  }

  onNavLinkClick(): void {
    // Ha a collapse nyitva van, bezárjuk
    if (this.collapseInstance) {
      this.collapseInstance.hide();
    }
  }
}
