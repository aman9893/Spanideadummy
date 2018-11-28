import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimelineInfoComponent } from './add-timeline-info.component';

describe('AddTimelineInfoComponent', () => {
  let component: AddTimelineInfoComponent;
  let fixture: ComponentFixture<AddTimelineInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTimelineInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimelineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
