import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  imports: [CommonModule],
    animations: [
  trigger('fadeIn', [
    state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
    state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
    transition('hidden => visible', animate('500ms ease-out'))
  ])
]
})
export class About implements AfterViewInit, OnDestroy {
 @ViewChildren('aboutItem') aboutItems!: QueryList<ElementRef>;
animationStates: string[] = [];
observer!: IntersectionObserver;

ngAfterViewInit() {
  this.animationStates = new Array(this.aboutItems.length).fill('hidden');

  this.observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const index = this.aboutItems.toArray().findIndex(
        el => el.nativeElement === entry.target
      );
      if (index !== -1 && entry.isIntersecting && this.animationStates[index] === 'hidden') {
        // Pequeño delay antes de activar animación
        setTimeout(() => {
          this.animationStates[index] = 'visible';
        }, 750); // medio segundo
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
