import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladesComponent } from './salades.component';

describe('SaladesComponent', () => {
  let component: SaladesComponent;
  let fixture: ComponentFixture<SaladesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaladesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaladesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
