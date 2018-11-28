import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpolyeeComponent } from './list-empolyee.component';

describe('ListEmpolyeeComponent', () => {
  let component: ListEmpolyeeComponent;
  let fixture: ComponentFixture<ListEmpolyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmpolyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
