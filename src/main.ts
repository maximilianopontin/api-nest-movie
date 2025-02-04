import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de CORS
  app.enableCors(),
  app.use(cors()); // Habilitar CORS

  await app.listen( 8080);
}
bootstrap();
