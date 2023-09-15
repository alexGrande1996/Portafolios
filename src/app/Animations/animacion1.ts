import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  state('void', style({
    transform: 'translateX(-100%)',
  })),
  transition('void <=> *', [
    animate('0.3s'),
  ]),
]);