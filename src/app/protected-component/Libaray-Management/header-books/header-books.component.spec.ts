import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBooksComponent } from './header-books.component';

describe('HeaderBooksComponent', () => {
  let component: HeaderBooksComponent;
  let fixture: ComponentFixture<HeaderBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
