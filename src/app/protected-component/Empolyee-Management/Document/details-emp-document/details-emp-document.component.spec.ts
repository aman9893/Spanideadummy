import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEmpDocumentComponent } from './details-emp-document.component';

describe('DetailsEmpDocumentComponent', () => {
  let component: DetailsEmpDocumentComponent;
  let fixture: ComponentFixture<DetailsEmpDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsEmpDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEmpDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
