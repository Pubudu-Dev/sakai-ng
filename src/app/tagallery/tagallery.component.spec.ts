import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagalleryComponent } from './tagallery.component';

describe('TagalleryComponent', () => {
  let component: TagalleryComponent;
  let fixture: ComponentFixture<TagalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TagalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
