import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpSalaryComponent } from './add-emp-salary.component';

describe('AddEmpSalaryComponent', () => {
  let component: AddEmpSalaryComponent;
  let fixture: ComponentFixture<AddEmpSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmpSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
