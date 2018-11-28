import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListEmpolyeeComponent } from './admin-list-empolyee.component';

describe('AdminListEmpolyeeComponent', () => {
  let component: AdminListEmpolyeeComponent;
  let fixture: ComponentFixture<AdminListEmpolyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListEmpolyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListEmpolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
