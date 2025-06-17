import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { About } from './about/about';
import { TechSkills } from './tech-skills/tech-skills';
import { Projects } from './projects/projects';
import { Certification } from './certification/certification';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule , Home, Footer, About, TechSkills, Projects, Certification],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  animations: [
    trigger('fadeInSection', [
      state('hidden', style({ opacity: 0, transform: 'translateY(40px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('500ms ease-out'))
    ])
  ]
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChildren('aboutItem') aboutItems!: QueryList<ElementRef>;
  animationStates: string[] = [];
  showContent = false;
  observer!: IntersectionObserver;

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    // Escuchar cambios de ruta para mostrar/ocultar contenido
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showContent = event.urlAfterRedirects === '/';
      this.cdr.detectChanges();  // actualizar vista
    });
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngAfterViewInit() {
    if (!this.aboutItems) return;

    this.animationStates = new Array(this.aboutItems.length).fill('hidden');

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const index = this.aboutItems.toArray().findIndex(el => el.nativeElement === entry.target);
        if (index !== -1 && entry.isIntersecting && this.animationStates[index] === 'hidden') {
          setTimeout(() => {
            this.animationStates[index] = 'visible';
            this.cdr.detectChanges();
          }, 500);
          this.observer.unobserve(entry.target);
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
