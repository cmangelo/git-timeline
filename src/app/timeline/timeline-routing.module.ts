import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline.component';
import { TimelineUserResolverService } from './timeline-user-resolver.service';

const routes: Routes = [
  {
    path: 'timeline/:username',
    component: TimelineComponent,
    resolve: {
      repos: TimelineUserResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelineRoutingModule { }
