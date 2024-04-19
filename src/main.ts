
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { ValidationPipe } from '@nestjs/common';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))

  app.enableCors({
    origin: true,
    // CORS HTTP methods
    methods: ["GET", "POST", "PUT", "DELETE"],
  });

  await app.listen(3000);
}

bootstrap();
