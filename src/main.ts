import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://localhost:3000', 'http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type, Authroization',
  });
  await app.listen(process.env.PORT);
}
bootstrap();
//for vercel
export const handler = async (req, res) => {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const response = await app.getHttpAdapter().getInstance().handle(req, res);
  return response;
};
