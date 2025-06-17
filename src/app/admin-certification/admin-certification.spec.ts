import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCertification } from './admin-certification';

describe('AdminCertification', () => {
  let component: AdminCertification;
  let fixture: ComponentFixture<AdminCertification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCertification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCertification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
