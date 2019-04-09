import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROOT_ROUTES } from '../../enums/routes.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeRoute implements OnInit {
  title = 'angular-starter';
  routes = ROOT_ROUTES;

  constructor(private router: Router) {}

  ngOnInit() {}

  linkTo(path: string[]) {
    this.router.navigate(path);
  }
}
