import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar CORS correctamente
  app.enableCors({
    origin: "https://api-react-movie.onrender.com", // URL de tu frontend en Render
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  });

  await app.listen(8080);
}

bootstrap();
