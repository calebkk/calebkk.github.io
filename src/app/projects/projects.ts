import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

@Component({
  selector: 'app-projects',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Example Project',
      description: 'Short description of the project.',
      image: '/assets/images/example.png',
      tags: ['Angular', 'TypeScript'],
      github: 'https://github.com/your/repo',
      demo: 'https://example.com'
    },
    // add more projects here
  ];
}
