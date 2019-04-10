import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RootRoutes } from '../../enums/routes.enum';
import { AuthRoutes } from '../../../auth/enums/routes.enum';

@Component({
  selector: 'home-route',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeRoute implements OnInit {
  title = 'angular-starter';

  Routes = { ...RootRoutes, ...AuthRoutes };

  constructor(private router: Router) {}

  ngOnInit() {}

  linkTo(path: string[]) {
    this.router.navigate(path);
  }
}
