import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,Projects, About, Skills, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nagasairamProtifolio');
  
  dark = false;
  mobileMenu = false;

  // toggleDark() {
  //   this.dark = !this.dark;
  //   const html = document.documentElement;
  //   if (this.dark) html.classList.add('dark'); else html.classList.remove('dark');
  // }

  // Smooth scroll to section by id
  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.mobileMenu = false; // auto-close menu on mobile scroll
  }
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) (e.target as HTMLElement).classList.add('show');
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }

  toggleDark() {
  this.dark = !this.dark;
  const htmlEl = document.documentElement; // <html>

  if (this.dark) {
    htmlEl.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    htmlEl.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

ngOnInit() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    this.dark = true;
    document.documentElement.classList.add("dark");
  }
}
}
