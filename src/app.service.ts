import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Maratona Fullcycle 2.0!';
  }
}
