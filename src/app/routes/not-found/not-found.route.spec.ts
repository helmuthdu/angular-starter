import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundRoute } from './not-found.route';

describe('NotFoundComponent', () => {
  let component: NotFoundRoute;
  let fixture: ComponentFixture<NotFoundRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundRoute]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
