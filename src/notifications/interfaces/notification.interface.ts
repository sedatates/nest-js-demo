import { Document } from 'mongoose';

export interface Notification extends Document {
  readonly title: string;
  readonly message: string;
  readonly targetUserId: string;
  readonly sentAt: Date;
}
