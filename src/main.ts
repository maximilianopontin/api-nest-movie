import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cors()); // Habilitar CORS
 // app.use(helmet()); 
  await app.listen(8080);//cambio a puerto 8080 para desarrollo
}
bootstrap();
