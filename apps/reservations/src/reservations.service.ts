import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservatiomnRepository: ReservationsRepository,
  ) {}

  create(createReservationDto: CreateReservationDto) {
    return this.reservatiomnRepository.create({
      ...createReservationDto,
      timastamp: new Date(),
      userId: '123',
    });
  }

  findAll() {
    return this.reservatiomnRepository.find({});
  }

  findOne(_id: string) {
    return this.reservatiomnRepository.findOne({ _id });
  }

  update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservatiomnRepository.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  remove(_id: string) {
    return this.reservatiomnRepository.findOneAndDelete({ _id });
  }
}
