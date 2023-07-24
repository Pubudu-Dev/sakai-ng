import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdplanComponent } from './prodplan.component';


describe('ProdplanComponent', () => {
  let component: ProdplanComponent;
  let fixture: ComponentFixture<ProdplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
