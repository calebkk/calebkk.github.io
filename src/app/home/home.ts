import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { About } from "../about/about";
import { Skills } from "../skills/skills";
import { Experience } from "../experience/experience";
import { Footer } from "../footer/footer";
import { Projects } from '../projects/projects';
import { Contacts } from '../contacts/contacts';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, About, Skills, Experience,Projects,Contacts, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
