import { Component } from '@angular/core';
import {trigger,transition,style,animate} from '@angular/animations';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
interface Feature {
  icon: string;
  color: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class About {

  features: Feature[] = [
    {
      icon: 'code',
      color: 'var(--color-primary)',
      title: 'Clean Code Advocate',
      description: 'Writing maintainable, scalable, and well-documented code is my top priority.'
    },
    {
      icon: 'zap',
      color: 'var(--color-accent)',
      title: 'Performance Focused',
      description: 'Optimizing applications for speed and efficiency to deliver the best user experience.'
    },
    {
      icon: 'coffee',
      color: 'var(--color-success)',
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and methodologies to stay ahead in the field.'
    }
  ];

}
