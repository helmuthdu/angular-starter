import { NotificationTypes } from '../enums/notification.enum';

export interface NotificationMessage {
  type: NotificationTypes;
  title: string;
  message: string;
}
