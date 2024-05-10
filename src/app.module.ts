import { Module } from '@nestjs/common';
//import { CommonModule } from './common/common.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),

    NotificationsModule,
  ],
  providers: [],
})
export class AppModule {}
