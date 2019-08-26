import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DefaultLayout } from './default.layout';

describe('DefaultLayoutComponent', () => {
  let component: DefaultLayout;
  let fixture: ComponentFixture<DefaultLayout>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultLayout],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
