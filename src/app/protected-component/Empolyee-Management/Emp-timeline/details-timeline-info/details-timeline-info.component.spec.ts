import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTimelineInfoComponent } from './details-timeline-info.component';

describe('DetailsTimelineInfoComponent', () => {
  let component: DetailsTimelineInfoComponent;
  let fixture: ComponentFixture<DetailsTimelineInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTimelineInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTimelineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
