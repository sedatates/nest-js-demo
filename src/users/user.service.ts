// UserService.ts
import { Injectable } from '@nestjs/common';
//import { DatabaseService } from '../database/database.service';

@Injectable()
export class UserService {
  constructor() {}

  async getHello(): Promise<string> {
    const a = 1;
    return 'Hello World! ' + a;
  }

  /* async getUserById(id: number): Promise<User> {
    const user = await this.databaseService.findOne(User, { id });
    if (!user) {
      throw new UserNotFoundException();
    }
    return user;
  } */

  /* async subscribeUser(
    userId: number,
    subscription: PushSubscription,
  ): Promise<void> {
    await this.databaseService.update(
      User,
      { id: userId },
      { pushSubscription },
    );
  } */
}
