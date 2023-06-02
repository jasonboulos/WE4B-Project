import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosproduitsComponent } from './nosproduits.component';

describe('NosproduitsComponent', () => {
  let component: NosproduitsComponent;
  let fixture: ComponentFixture<NosproduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosproduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
