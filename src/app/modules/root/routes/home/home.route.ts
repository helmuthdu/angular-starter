import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootPaths, UserPaths } from '../../../paths';
import { State } from '../../stores';
import { RootActionTypes, Decrement, Increment, Reset } from '../../stores/modules/counter';

@Component({
  selector: 'home-route',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeRoute implements AfterViewInit {
  title = 'angular-starter';
  routes = { ...RootPaths, ...UserPaths };
  count$: Observable<number>;

  constructor(private router: Router, private store: Store<State>) {
    this.count$ = store.pipe(select('counter'));
  }

  increment(): void {
    this.store.dispatch(new Increment());
  }

  decrement(): void {
    this.store.dispatch(new Decrement());
  }

  reset(): void {
    this.store.dispatch(new Reset());
  }

  ngAfterViewInit(): void {
    this.store.dispatch({ type: RootActionTypes.autoIncrement });
  }

  linkTo(path: string[]): void {
    this.router.navigate(path);
  }
}
