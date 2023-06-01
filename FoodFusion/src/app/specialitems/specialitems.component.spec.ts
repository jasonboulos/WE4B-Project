import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialitemsComponent } from './specialitems.component';

describe('SpecialitemsComponent', () => {
  let component: SpecialitemsComponent;
  let fixture: ComponentFixture<SpecialitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
