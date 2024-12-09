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
  return app;
}

// Default export for Vercel to use
export default async (req: Request, res: Response) => {
  const app = await bootstrap(); // Create the app instance
  const instance = app.getHttpAdapter().getInstance(); // Get the express instance
  return instance(req, res); // Handle the request using the Express instance
};
