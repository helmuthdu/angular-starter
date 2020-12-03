import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserDefaultLayout } from './default.layout';

describe('DefaultLayoutComponent', () => {
  let component: UserDefaultLayout;
  let fixture: ComponentFixture<UserDefaultLayout>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDefaultLayout],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDefaultLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
