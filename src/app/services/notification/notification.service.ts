import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { NotificationType } from '../../enums/notification.enum';
import { NotificationMessage } from '../../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private subject$ = new Subject<NotificationMessage>();
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

  info(title: string, text: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject$.next({ type: NotificationType.info, title, text });
  }

  success(title: string, text: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject$.next({ type: NotificationType.success, title, text });
  }

  waiting(title: string, text: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject$.next({ type: NotificationType.waiting, title, text });
  }

  error(title: string, text: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject$.next({ type: NotificationType.error, title, text });
  }

  warning(title: string, text: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject$.next({ type: NotificationType.warning, title, text });
  }

  get messages(): Observable<NotificationMessage> {
    return this.subject$.asObservable();
  }
}

// this._notify.messages.subscribe(message => { this.message = message; });
