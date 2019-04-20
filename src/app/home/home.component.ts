import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  query: string;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.timelineService.getUser('cmangelo').subscribe(result => console.log(result));
  }
  navigateToTimeline() {
    this.router.navigate(['/timeline', this.query])
  }
}
