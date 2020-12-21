import { Component, OnInit } from '@angular/core';
import { NotificationMessage, NotificationTypes } from '../../models/notification';
import { NotificationService } from '../../services';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: NotificationMessage[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.messages.subscribe((notification: NotificationMessage) => {
      if (!notification) {
        // clear alerts when an empty alert is received
        this.notifications = [];
        return;
      }

      // add alert to array
      this.notifications.push(notification);
    });
  }

  remove(notification: NotificationMessage): void {
    this.notifications = this.notifications.filter(n => n !== notification);
  }

  classNames(notification: NotificationMessage): string {
    if (!notification) {
      return '';
    }

    // return css class based on notification type
    switch (notification.type) {
      case NotificationTypes.success:
        return 'alert alert-success';
      case NotificationTypes.error:
        return 'alert alert-danger';
      case NotificationTypes.info:
      case NotificationTypes.waiting:
        return 'alert alert-info';
      case NotificationTypes.warning:
        return 'alert alert-warning';
    }
  }
}
