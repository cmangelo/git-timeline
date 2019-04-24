import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { User } from './models/User';
import { ActivatedRoute } from '@angular/router';
import { RepoNode } from './models/RepoNode';
import { listAnimation } from '../animations';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [listAnimation]
})
export class TimelineComponent implements OnInit {
  user: User;
  repos: Array<RepoNode>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscribeToUserData();
  }

  subscribeToUserData() {
    this.route.data.subscribe((data: {user: User}) => {
      this.user = data.user;
      this.repos = this.user.repositories.nodes;
    });
  }
}
