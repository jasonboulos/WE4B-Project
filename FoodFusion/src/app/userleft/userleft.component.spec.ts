import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserleftComponent } from './userleft.component';

describe('UserleftComponent', () => {
  let component: UserleftComponent;
  let fixture: ComponentFixture<UserleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserleftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
