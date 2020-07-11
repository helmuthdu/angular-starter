import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { Effects } from '../effects';

describe('AppEffects', () => {
  // tslint:disable-next-line:prefer-const
  let actions$: Observable<any>;
  let effects: ComponentFixture<Effects>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Effects, provideMockActions(() => actions$)]
    });

    effects = TestBed.createComponent(Effects);
  });

  it('should be created', () => {
    expect(effects.componentInstance).toBeTruthy();
  });
});
