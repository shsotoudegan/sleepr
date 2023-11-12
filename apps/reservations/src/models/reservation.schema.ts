import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class ReservationDocumant extends AbstractDocument {
  @Prop()
  timastamp: Date;
  @Prop()
  startDate: Date;
  @Prop()
  enddate: Date;
  @Prop()
  userUd: string;
  @Prop()
  placeId: string;
  @Prop()
  invoiceId: string;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocumant);
