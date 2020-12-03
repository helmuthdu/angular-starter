import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRootDefaultLayout } from './default.layout';

describe('DefaultLayoutComponent', () => {
  let component: AppRootDefaultLayout;
  let fixture: ComponentFixture<AppRootDefaultLayout>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppRootDefaultLayout],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRootDefaultLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
