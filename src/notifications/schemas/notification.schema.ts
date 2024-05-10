/* 

Bildirimler Koleksiyonu:

_id (MongoDB nesne kimliği)
title
message
targetUserId (Kullanıcılar koleksiyonundan nesne kimliği)
sentAt

*/

// Path: src/common/database/schemas/notification/notification.schema.ts
import { Schema } from 'mongoose';

export const NotificationSchema = new Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  targetUserId: { type: Schema.Types.ObjectId, required: true },
  sentAt: { type: Date, default: Date.now },
});
