import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { TimelineService } from './timeline.service';
import { Subscription } from 'rxjs';
import { Repo } from './models/Repo';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent implements OnInit {
  @Input() username: string;
  user: any;
  repos: Array<Repo>;
  lastRequest: Subscription;

  constructor(private timelineService: TimelineService) { }

  ngOnInit() {
    this.timelineService.getUser('cmangelo').subscribe(result => console.log(result));
  }

  private getUser() {
    if (this.lastRequest) {
      this.lastRequest.unsubscribe();
    }

    this.lastRequest = this.timelineService.getUser(this.username).subscribe((response: any) => {
      this.user = response.data.user;
      this.repos = this.user.repos.nodes;
    });
  }
}