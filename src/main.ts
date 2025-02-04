import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de CORS
  app.enableCors({
    origin: '*', // Elimina el slash final si existe
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    credentials: true, // Permite el uso de cookies si es necesario
  });
  app.use(cors()); // Habilitar CORS

  await app.listen( 8080);
}
bootstrap();
