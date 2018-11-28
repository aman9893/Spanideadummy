import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpManagementHeaderComponent } from './emp-management-header.component';

describe('EmpManagementHeaderComponent', () => {
  let component: EmpManagementHeaderComponent;
  let fixture: ComponentFixture<EmpManagementHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpManagementHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpManagementHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
