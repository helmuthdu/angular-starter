import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SignInRoute } from './sign-in.route';

describe('SignInComponent', () => {
  let component: SignInRoute;
  let fixture: ComponentFixture<SignInRoute>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInRoute],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
