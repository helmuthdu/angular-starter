import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInRoute } from './sign-in.route';

describe('SignInComponent', () => {
  let component: SignInRoute;
  let fixture: ComponentFixture<SignInRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInRoute ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
