import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReButtonsComponent } from './re-buttons.component';

describe('ReButtonsComponent', () => {
  let component: ReButtonsComponent;
  let fixture: ComponentFixture<ReButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
