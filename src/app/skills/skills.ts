import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
    skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 80 },
        { name: 'Kubernetes', level: 70 }
      ]
    }
  ];

}
