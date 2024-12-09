import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getMongoUrl(): string {
    return this.configService.get('MONGO_URL');
  }
  getDatabaseName(): string {
    return this.configService.get('DB_NAME');
  }
}
