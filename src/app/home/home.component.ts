import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  query: string;
  error: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToTimeline() {
    this.router.navigate(['/timeline', this.query])
      .catch(() => this.error = true);
  }
}
