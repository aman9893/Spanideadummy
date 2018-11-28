import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeeSideListComponent } from './empolyee-side-list.component';

describe('EmpolyeeSideListComponent', () => {
  let component: EmpolyeeSideListComponent;
  let fixture: ComponentFixture<EmpolyeeSideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpolyeeSideListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpolyeeSideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
