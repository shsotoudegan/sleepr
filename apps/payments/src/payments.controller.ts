import { Controller } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateChargeDto } from './dto/create-charge.dto';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern('create_charge')
  async createCharge({ card, amount }: CreateChargeDto) {
    return this.paymentsService.createCharge(card, amount);
  }
}
