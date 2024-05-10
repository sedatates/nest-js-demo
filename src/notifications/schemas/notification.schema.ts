// Path: src/common/database/schemas/notification/notification.schema.ts
import * as mongoose from 'mongoose';

export const NotificationSchema = new mongoose.Schema({
  title: String,
  message: String,
  targetUserId: String,
  sentAt: Date,
});
