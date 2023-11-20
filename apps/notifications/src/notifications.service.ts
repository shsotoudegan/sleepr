import { Injectable } from '@nestjs/common';
import { NotifyEmailDto } from './dto/notify-email.dot';

@Injectable()
export class NotificationsService {
  async notifyEmail(data: NotifyEmailDto) {
    console.log(data.email);
  }
}
