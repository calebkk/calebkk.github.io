import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contacts',
  imports: [LucideAngularModule, CommonModule, FormsModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class Contacts {
    formData = {
    name: '',
    email: '',
    message: ''
  };

  handleSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! I will get back to you soon.');

    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }

}
