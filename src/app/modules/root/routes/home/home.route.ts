import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ROOT_PATHS, USER_PATHS } from '../../../paths';
import { State } from '../../stores';
import { ActionTypes, Decrement, Increment, Reset } from '../../stores/modules/counter';

@Component({
  selector: 'home-route',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeRoute implements AfterViewInit {
  title = 'angular-starter';
  Routes = { ...ROOT_PATHS, ...USER_PATHS };
  count$: Observable<number>;

  constructor(private router: Router, private store: Store<State>) {
    this.count$ = store.pipe(select('counter'));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

  ngAfterViewInit() {
    this.store.dispatch({ type: ActionTypes.AutoIncrement });
  }

  linkTo(path: string[]) {
    this.router.navigate(path);
  }
}
