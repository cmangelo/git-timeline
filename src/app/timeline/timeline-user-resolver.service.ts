import { Injectable } from '@angular/core';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { User } from './models/User';
import { TimelineService } from './timeline.service';

@Injectable({
  providedIn: 'root'
})
export class TimelineUserResolverService implements Resolve<User>{
  constructor(private service: TimelineService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> {
    let username = route.paramMap.get('username');

    return this.service.getUser(username).pipe(mergeMap((result: any) => {
      if (result) {
        return of(result.data.users);
      } else {
        this.router.navigate(['/'])
        return EMPTY;
      }
    }))
  }
}
