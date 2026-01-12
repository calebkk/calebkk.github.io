import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  scrollToAbout(): void {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
