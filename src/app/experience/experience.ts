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
      company: 'Offshore Global Logistics',
      position: 'IT Support Specialist',
      period: 'May 2025 - Present',
      description: [
        'Designed and deployed Visitor Management System with Django, TailwindCSS, and SQLite',
        'Managed ERP data validation and order placement in WMS systems',
        'Conducted penetration testing simulations and cybersecurity awareness training',
        'Audited and redesigned company website for SEO and mobile optimization'
      ]
    },
    {
      company: 'NelsonelTech Solutions Limited',
      position: 'Backend Software Developer',
      period: 'Nov 2023 - Apr 2025',
      description: [
        'Engineered multi-tenant pharmacy management system for multiple businesses',
        'Developed secure authentication with role-based access control using Django',
        'Integrated real-time inventory management and POS modules',
        'Built automated reporting dashboards with PostgreSQL and MongoDB'
      ]
    },
    {
      company: 'Systems Reengineered (Microsoft Dynamics Partner)',
      position: 'Full-Stack Software Development Intern',
      period: 'Jul 2023 - Oct 2023',
      description: [
        'Developed ERP solutions integrating Angular frontend and .NET Web API backend',
        'Integrated Microsoft 365 Business Central functionalities',
        'Implemented payment gateway integration (M-Pesa)',
        'Performed testing, debugging, and system monitoring'
      ]
    },
    {
      company: 'Freelance Developer',
      position: 'Remote Software Developer',
      period: 'Mar 2022 - Jun 2023',
      description: [
        'Built responsive websites using Angular and WordPress',
        'Developed IoT automation solutions with Node-RED',
        'Integrated Python scripts for data analysis and automation',
        'Mentored students in C++ programming and algorithms'
      ]
    }
  ];
}
