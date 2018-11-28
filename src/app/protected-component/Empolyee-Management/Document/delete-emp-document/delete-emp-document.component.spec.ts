import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmpDocumentComponent } from './delete-emp-document.component';

describe('DeleteEmpDocumentComponent', () => {
  let component: DeleteEmpDocumentComponent;
  let fixture: ComponentFixture<DeleteEmpDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEmpDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmpDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
