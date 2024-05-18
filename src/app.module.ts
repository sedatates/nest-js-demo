import { Module } from '@nestjs/common';
//import { CommonModule } from './common/common.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),

    NotificationsModule,
    UsersModule,
  ],
  providers: [],
})
export class AppModule {}
