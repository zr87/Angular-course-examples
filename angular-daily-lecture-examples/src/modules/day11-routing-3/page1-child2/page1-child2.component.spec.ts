import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1Child2Component } from './page1-child2.component';

describe('Page1Child2Component', () => {
  let component: Page1Child2Component;
  let fixture: ComponentFixture<Page1Child2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1Child2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
