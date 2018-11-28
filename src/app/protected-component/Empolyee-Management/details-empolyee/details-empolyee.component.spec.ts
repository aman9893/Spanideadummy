import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEmpolyeeComponent } from './details-empolyee.component';

describe('DetailsEmpolyeeComponent', () => {
  let component: DetailsEmpolyeeComponent;
  let fixture: ComponentFixture<DetailsEmpolyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsEmpolyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEmpolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
