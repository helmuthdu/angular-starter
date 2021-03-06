import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from '../../../../app.stores';
import AppModules from '../../../index';

import { HomeRoute } from './home.route';

describe('HomeRouteComponent', () => {
  let component: HomeRoute;
  let fixture: ComponentFixture<HomeRoute>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRoute],
      imports: [RouterTestingModule, StoreModule.forRoot({ ...AppModules.reducers }, { metaReducers })]
    }).compileComponents();
  });

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
