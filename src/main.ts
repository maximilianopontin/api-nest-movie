import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: '*',
    methods: ['GET,POST,PUT,DELETE,PATCH,OPTIONS'],
    allowedHeaders: ['Content-Type, Authorization'],
    credentials: true,
  });

  const PORT = process.env.PORT || 8080; // Usa el puerto asignado por Render
  await app.listen(PORT);
}

bootstrap();
