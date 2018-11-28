import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailsSalaryComponent } from './add-details-salary.component';

describe('AddDetailsSalaryComponent', () => {
  let component: AddDetailsSalaryComponent;
  let fixture: ComponentFixture<AddDetailsSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDetailsSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailsSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
