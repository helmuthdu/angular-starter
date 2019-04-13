import { Component, OnInit } from '@angular/core';
import { MatchMediaService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public matchMediaService: MatchMediaService) {}

  ngOnInit(): void {
  }
}
