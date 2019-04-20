import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Repo } from './models/Repo';
import { User } from './models/User';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent implements OnInit {
  user: User;
  repos: Array<Repo>;

  constructor(private route: ActivatedRouteSnapshot) {}

  ngOnInit() {
    this.subscribeToUserData();
  }

  subscribeToUserData() {
    this.route.data.subscribe((data: { user: User }) => {
      this.user = data.user;
      this.repos = this.user.repos;
    });
  }
}
