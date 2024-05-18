import { Mongoose } from 'mongoose';
import { NotificationSchema } from './schemas/notification.schema';

export const notificationProviders = [
  {
    provide: 'NOTIFICATION_MODEL',
    useFactory: (mongoose: Mongoose) => {
      return mongoose.model('Notification', NotificationSchema);
    },
    inject: ['DATABASE_CONNECTION'],
  },
];
