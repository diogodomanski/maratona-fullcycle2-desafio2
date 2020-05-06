import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Maratona } from './maratona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MaratonaService
{
  constructor(
    @InjectRepository(Maratona)
    private _maratonaRepository: Repository<Maratona>
  ) { }

  findAll(): Promise<Maratona[]>
  {
    return this._maratonaRepository.find();
  }

  create(entity: Maratona): Promise<Maratona | undefined>
  {
    return this._maratonaRepository.save(entity);
  }
}
