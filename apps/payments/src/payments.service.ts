import { NOTIFICATIONS_SERVICE } from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  constructor(
    private readonly configService: ConfigService,
    @Inject(NOTIFICATIONS_SERVICE)
    private readonly notificationsService: ClientProxy,
  ) {}

  private readonly stripe = new Stripe(
    this.configService.get('STRIPE_SECRET'),
    { apiVersion: '2023-10-16' },
  );

  async createCharge(
    card: Stripe.PaymentMethodCreateParams.Card1,
    amount: number,
  ) {
    /* const paymentMethod = await this.stripe.paymentMethods.create({
      type: 'card',
      card,
    });
    return await this.stripe.paymentIntents.create({
      payment_method: paymentMethod.id,
      amount: amount * 100,
      confirm: true,
      payment_method_types: ['card'],
      currency: 'usd',
    }); */

    this.notificationsService.emit('notify_email', {
      email: 'dsasadsasad@dsad.saad',
    });
    return { id: 'payment id' };
  }
}
