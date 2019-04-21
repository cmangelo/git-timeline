import { Injectable } from '@angular/core';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of,  throwError } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { User } from './models/User';
import { TimelineService } from './timeline.service';

@Injectable({
  providedIn: 'root'
})
export class TimelineUserResolverService implements Resolve<User>{
  constructor(private service: TimelineService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> {
    let username = route.paramMap.get('username');

    return this.service.getUser(username).pipe(take(1),mergeMap((result: any) => {
      if (result) {
        console.log(result.data.user)
        return of(result.data.user);
      } else {
        // this.router.navigate(['/'])
        console.log(result);
        return throwError("error");
      }
    }))
  }
}
