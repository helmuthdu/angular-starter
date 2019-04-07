import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRoute } from './home.route';

describe('HomeRouteComponent', () => {
  let component: HomeRoute;
  let fixture: ComponentFixture<HomeRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRoute]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    fixture = TestBed.createComponent(HomeRoute);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-starter!');
  });

  it(`should have as title 'angular-starter'`, () => {
    fixture = TestBed.createComponent(HomeRoute);
    const componentInstance = fixture.debugElement.componentInstance;
    expect(componentInstance.title).toEqual('angular-starter');
  });
});
