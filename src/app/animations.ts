import {
  trigger, animateChild, group,
  transition, animate, style, query, stagger
} from '@angular/animations';


export const slideInAnimation =
  trigger('routeAnimation', [
    transition('home <=> timeline', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

export const listAnimation = 
  trigger('listStagger', [
    transition('* <=> *', [
      query(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger(
            '50ms',
            animate(
              '550ms ease-out',
              style({ opacity: 1, transform: 'translateY(0px)' })
            )
          )
        ],
        { optional: true }
      ),
      query(':leave', animate('50ms', style({ opacity: 0 })), {
        optional: true
      })
    ])
  ]);