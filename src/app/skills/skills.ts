import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
    public skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'C#', level: 80 },
        { name: 'Java', level: 75 }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'React', level: 80 },
        { name: 'TailwindCSS', level: 85 },
        { name: 'WordPress', level: 75 },
        { name: 'Webflow', level: 70 }
      ]
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Django', level: 90 },
        { name: 'Flask', level: 80 },
        { name: 'Express.js', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Azure', level: 80 },
        { name: 'Google Cloud', level: 75 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'Docker', level: 75 }
      ]
    },
    {
      title: 'AI & Data Science',
      skills: [
        { name: 'Machine Learning', level: 75 },
        { name: 'TensorFlow', level: 70 },
        { name: 'Pandas', level: 80 },
        { name: 'NumPy', level: 80 },
        { name: 'LangChain', level: 70 }
      ]
    },
    {
      title: 'Specialized Skills',
      skills: [
        { name: 'ERP Systems', level: 85 },
        { name: 'Cybersecurity', level: 75 },
        { name: 'IoT Integration', level: 75 },
        { name: 'Mobile Development', level: 70 },
        { name: 'Blockchain', level: 65 }
      ]
    }
  ];

}
