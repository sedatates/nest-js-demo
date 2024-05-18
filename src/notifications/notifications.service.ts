import { Inject, Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { Notification } from 'src/notifications/interfaces/notification.interface';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(
    @Inject('NOTIFICATION_MODEL')
    private readonly notificationModel: Model<Notification>,
  ) {}

  async createNotification(
    createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    const createdNotification = new this.notificationModel(
      createNotificationDto,
    );
    await createdNotification.save();

    return createdNotification;
  }

  async getNotifications(): Promise<Notification[]> {
    return await this.notificationModel.find().exec();
  }
}
