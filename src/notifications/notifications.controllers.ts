import { Controller, Get, Post, Body } from '@nestjs/common';

import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/CreateNotificationDto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  async createNotification(
    @Body() createNotificationDto: CreateNotificationDto,
  ) {
    return await this.notificationsService.createNotification(
      createNotificationDto,
    );
  }

  @Get()
  async getNotifications() {
    return await this.notificationsService.getNotifications();
  }
}
