
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))

  app.enableCors({
    origin: 'https://api-react-movie.onrender.com', 
    // CORS HTTP methods
    methods: ["GET", "POST", "PUT", "DELETE"],
  });
  app.use(cors());

  await app.listen(3000);
}

bootstrap();
