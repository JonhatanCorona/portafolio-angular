import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSkills } from './tech-skills';

describe('TechSkills', () => {
  let component: TechSkills;
  let fixture: ComponentFixture<TechSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechSkills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
