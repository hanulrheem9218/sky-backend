import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return { Hello: process.env.MONGO_DB_NAME };
  }
}
