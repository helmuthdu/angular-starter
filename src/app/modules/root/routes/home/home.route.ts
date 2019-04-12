import { AfterViewInit, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { RootRoutes } from '../../enums/routes.enum';
import { AuthRoutes } from '../../../auth/enums/routes.enum';
import { Observable } from 'rxjs';
import { ActionTypes, Decrement, Increment, Reset } from '../../stores/modules/counter';

@Component({
  selector: 'home-route',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeRoute implements AfterViewInit {
  title = 'angular-starter';
  Routes = { ...RootRoutes, ...AuthRoutes };
  count$: Observable<number>;

  constructor(private router: Router, private store: Store<{ counter: number }>) {
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
