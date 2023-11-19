import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservatiomnRepository: ReservationsRepository,
  ) {}

  async create(createReservationDto: CreateReservationDto, userId: string) {
    return this.reservatiomnRepository.create({
      ...createReservationDto,
      timastamp: new Date(),
      userId,
    });
  }

  async findAll() {
    return this.reservatiomnRepository.find({});
  }

  async findOne(_id: string) {
    return this.reservatiomnRepository.findOne({ _id });
  }

  async update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservatiomnRepository.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  async remove(_id: string) {
    return this.reservatiomnRepository.findOneAndDelete({ _id });
  }
}
