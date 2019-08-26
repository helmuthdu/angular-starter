import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AboutRoute } from './about.route';

describe('AboutRouteComponent', () => {
  let component: AboutRoute;
  let fixture: ComponentFixture<AboutRoute>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutRoute],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
