import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeRoute implements OnInit {
  title = 'angular-starter';

  constructor() {}

  ngOnInit() {}
}
