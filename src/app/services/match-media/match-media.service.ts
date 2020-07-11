import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

type Viewports = { [key: string]: boolean };

@Injectable({
  providedIn: 'root'
})
export class MatchMediaService {
  private viewports: Viewports;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([...Object.values(Breakpoints)]).subscribe((state: BreakpointState) => {
      this.viewports = Object.keys(Breakpoints).reduce((acc: any, key: string) => {
        acc[key] = state.breakpoints[Breakpoints[key]];
        return acc;
      }, {});
    });
  }

  get matches(): Viewports {
    return this.viewports;
  }
}
