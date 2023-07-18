import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TadashboardComponent } from './tadashboard.component';

describe('TadashboardComponent', () => {
  let component: TadashboardComponent;
  let fixture: ComponentFixture<TadashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TadashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TadashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
