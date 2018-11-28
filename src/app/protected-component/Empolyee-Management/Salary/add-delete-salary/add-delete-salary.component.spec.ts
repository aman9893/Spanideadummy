import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeleteSalaryComponent } from './add-delete-salary.component';

describe('AddDeleteSalaryComponent', () => {
  let component: AddDeleteSalaryComponent;
  let fixture: ComponentFixture<AddDeleteSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeleteSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeleteSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
