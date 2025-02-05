import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔹 Habilitar CORS sin restricciones temporales para probar
  app.enableCors({
    origin: '*', // Permite cualquier origen temporalmente
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, // Si usas cookies o tokens de autenticación
  });

  await app.listen(8080);
}

bootstrap();
