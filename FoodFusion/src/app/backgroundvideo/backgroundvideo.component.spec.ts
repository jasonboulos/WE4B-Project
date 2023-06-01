import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundvideoComponent } from './backgroundvideo.component';

describe('BackgroundvideoComponent', () => {
  let component: BackgroundvideoComponent;
  let fixture: ComponentFixture<BackgroundvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundvideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
