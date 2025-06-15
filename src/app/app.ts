import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ChangeDetectorRef } from '@angular/core';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { TechSkills } from './tech-skills/tech-skills';
import { Projects } from './projects/projects';
import { Certification } from './certification/certification';


@Component({
  selector: 'app-root',
  imports: [Home, Footer, RouterModule, About, TechSkills, Projects, Certification],
  templateUrl: './app.html',
  styleUrl: './app.scss',
    animations: [  // 👈 AQUÍ deben estar las animaciones
    trigger('fadeInSection', [
      state('hidden', style({ opacity: 0, transform: 'translateY(40px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('500ms ease-out'))
    ])
  ]
})

export class App {
   scrollTo(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

@ViewChildren('aboutItem') aboutItems!: QueryList<ElementRef>;
animationStates: string[] = [];
constructor(private cdr: ChangeDetectorRef) {}
observer!: IntersectionObserver;
animationState = 'hidden'; 
ngAfterViewInit() {
  this.animationStates = new Array(this.aboutItems.length).fill('hidden');

  this.observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const index = this.aboutItems.toArray().findIndex(
      el => el.nativeElement === entry.target
    );
    if (index !== -1 && entry.isIntersecting && this.animationStates[index] === 'hidden') {
      setTimeout(() => {
        this.animationStates[index] = 'visible';
        this.cdr.detectChanges();  // 👈 muy importante
      }, 500); // medio segundo
      this.observer.unobserve(entry.target); // solo animar una vez
    }
  });
}, {
  threshold: 0.1
});

  this.aboutItems.forEach(item => this.observer.observe(item.nativeElement));
}

ngOnDestroy() {
  this.observer.disconnect();
}
}
