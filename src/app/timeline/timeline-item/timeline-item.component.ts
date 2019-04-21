import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { RepoNode } from '../models/RepoNode';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineItemComponent implements OnInit {
  @Input() repo: RepoNode;

  constructor() { }

  ngOnInit() {
  }

}
