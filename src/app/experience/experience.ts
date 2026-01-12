import { Component } from '@angular/core';
import { trigger, style, animate, transition, stagger, query } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  animations: [
    trigger('container', [
      transition(':enter', [
        query(
          '.experience-item',
          [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            stagger(200, [
              animate(
                '600ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              )
            ])
          ],
          { optional: true }
        )
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('listItem', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-10px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior Full-Stack Developer',
      period: 'Jan 2022 - Present',
      description: [
        'Lead development of microservices architecture serving 1M+ users',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      company: 'Digital Innovations Inc',
      position: 'Full-Stack Developer',
      period: 'Jun 2020 - Dec 2021',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Collaborated with UX designers to implement responsive designs',
        'Integrated third-party APIs and payment gateways',
        'Participated in agile development processes and sprint planning'
      ]
    },
    {
      company: 'StartUp Labs',
      position: 'Junior Developer',
      period: 'Mar 2019 - May 2020',
      description: [
        'Built features for SaaS platform using React and Node.js',
        'Wrote unit and integration tests achieving 85% code coverage',
        'Contributed to open-source projects and internal tools',
        'Learned modern development practices and cloud technologies'
      ]
    }
  ];
}
