import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialproductComponent } from './specialproduct.component';

describe('SpecialproductComponent', () => {
  let component: SpecialproductComponent;
  let fixture: ComponentFixture<SpecialproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
