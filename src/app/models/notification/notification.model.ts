import { NotificationTypes } from './notification.enum';

export interface NotificationMessage {
  type: NotificationTypes;
  title: string;
  message: string;
}
