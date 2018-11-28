import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmolyeepHeaderComponent } from './emolyeep-header.component';

describe('EmolyeepHeaderComponent', () => {
  let component: EmolyeepHeaderComponent;
  let fixture: ComponentFixture<EmolyeepHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmolyeepHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmolyeepHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
