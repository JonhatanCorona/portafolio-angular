import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DataService } from '../fire';

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

export class About implements OnInit, AfterViewInit, OnDestroy {
items: any[] = [];
itemsExperience: any[] = [];
itemsCertification: any[] = [];

@ViewChildren('aboutItem') aboutItems!: QueryList<ElementRef>;
animationStates: string[] = [];
observer!: IntersectionObserver;

constructor(private dataService: DataService) {}

ngOnInit() {
  this.dataService.getItems('about').subscribe(data => {
    console.log('Datos recibidos:', data);
    this.items = data;
  });

  this.dataService.getItems('experience').subscribe(data => {
    console.log('Datos experience:', data);
    this.itemsExperience = data;
  });

  this.dataService.getItems('certification').subscribe(data => {
    console.log('Datos certification:', data);
    this.itemsCertification = data;
  });
}
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
          }, 750);
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