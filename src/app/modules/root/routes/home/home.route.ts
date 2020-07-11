import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootRoutes, UserRoutes } from '../../../routes';
import { ActionTypes, Decrement, Increment, Reset } from '../../stores/modules/counter';

@Component({
  selector: 'home-route',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeRoute implements AfterViewInit {
  title = 'angular-starter';
  Routes = { ...RootRoutes, ...UserRoutes };
  count$: Observable<number>;

  constructor(private router: Router, private store: Store<{ counter: number }>) {
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
    this.store.dispatch({ type: ActionTypes.AutoIncrement });
  }

  linkTo(path: string[]): void {
    this.router.navigate(path);
  }
}
