import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpDocumentComponent } from './add-emp-document.component';

describe('AddEmpDocumentComponent', () => {
  let component: AddEmpDocumentComponent;
  let fixture: ComponentFixture<AddEmpDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmpDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
