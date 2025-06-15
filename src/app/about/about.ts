import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  imports: [CommonModule],
   animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden => visible', [
        animate('0.5s 1s ease-in') // 1s duración con 2s delay
      ])
    ])
  ]
})
export class About implements OnInit, OnDestroy {
  @ViewChild('aboutTitle') aboutTitle!: ElementRef;

  animationState = 'hidden';

  observer!: IntersectionObserver;

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animationState = 'visible';
          this.observer.disconnect();  // Sólo activar una vez
        }
      });
    }, {
      threshold: 0.1 // se activa cuando el 20% del elemento es visible
    });
  }

  ngAfterViewInit() {
    if (this.aboutTitle) {
      this.observer.observe(this.aboutTitle.nativeElement);
    }
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
