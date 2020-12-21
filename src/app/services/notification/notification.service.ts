import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { NotificationMessage } from '../../models';
import { NotificationTypes } from '../../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly subject$ = new Subject<NotificationMessage>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // clear alert message on route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.subject$.next();
        }
      }
    });
  }

  info(title: string, message: string, keepAfterNavigationChange = false): void {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject$.next({ type: NotificationTypes.info, title, message });
  }

  success(title: string, message: string, keepAfterNavigationChange = false): void {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject$.next({ type: NotificationTypes.success, title, message });
  }

  waiting(title: string, message: string, keepAfterNavigationChange = false): void {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject$.next({ type: NotificationTypes.waiting, title, message });
  }

  error(title: string, message: string, keepAfterNavigationChange = false): void {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject$.next({ type: NotificationTypes.error, title, message });
  }

  warning(title: string, message: string, keepAfterNavigationChange = false): void {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject$.next({ type: NotificationTypes.warning, title, message });
  }

  clear(): void {
    this.subject$.next();
  }

  get messages(): Observable<NotificationMessage> {
    return this.subject$.asObservable();
  }
}
