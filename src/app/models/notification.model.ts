import { NotificationType } from '../enums/notification.enum';

export interface NotificationMessage {
  type: NotificationType;
  title: string;
  text: string;
}
