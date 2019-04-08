import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRoute } from './about.route';

describe('AboutRouteComponent', () => {
  let component: AboutRoute;
  let fixture: ComponentFixture<AboutRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutRoute]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
