import { Controller, Get, Post, Body } from '@nestjs/common';
import { MaratonaService } from './maratona.service';
import { Maratona } from './maratona.entity';

@Controller('maratona')
export class MaratonaController
{
  constructor(private _maratonaService: MaratonaService) {}

  @Get()
  async index()
  {
    return await this._maratonaService.findAll();
  }

  @Post()
  async create(@Body() maratona: Maratona)
  {
    return await this._maratonaService.create(maratona);
  }
}
