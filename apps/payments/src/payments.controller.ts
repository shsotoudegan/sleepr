import { Controller } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateChargeDto } from '@app/common';
import Stripe from 'stripe';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern('create_charge')
  async createCharge({ card, amount }: CreateChargeDto) {
    return this.paymentsService.createCharge(card as any, amount);
  }
}
