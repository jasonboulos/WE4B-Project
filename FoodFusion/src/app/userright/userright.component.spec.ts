import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrightComponent } from './userright.component';

describe('UserrightComponent', () => {
  let component: UserrightComponent;
  let fixture: ComponentFixture<UserrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserrightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
