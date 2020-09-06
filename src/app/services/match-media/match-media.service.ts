import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

type BreakpointsKey = keyof typeof Breakpoints;
type Viewports = { [key in BreakpointsKey]: boolean };

@Injectable({
  providedIn: 'root'
})
export class MatchMediaService {
  private viewports!: Viewports;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([...Object.values(Breakpoints)]).subscribe((state: BreakpointState) => {
      this.viewports = Object.keys(Breakpoints).reduce((acc: any, key: string) => {
        acc[key] = state.breakpoints[Breakpoints[key as BreakpointsKey]];
        return acc;
      }, {});
    });
  }

  get matches(): Viewports {
    return this.viewports;
  }
}
