import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';

@NgModule({
  declarations: [TimelineComponent, TimelineItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    TimelineRoutingModule
  ],
  exports: [TimelineComponent]
})
export class TimelineModule { }
