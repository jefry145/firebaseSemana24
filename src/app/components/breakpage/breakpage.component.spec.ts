import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakpageComponent } from './breakpage.component';

describe('BreakpageComponent', () => {
  let component: BreakpageComponent;
  let fixture: ComponentFixture<BreakpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
