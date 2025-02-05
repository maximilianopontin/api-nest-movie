import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para permitir peticiones desde el frontend
  app.enableCors({
    origin: 'https://api-react-movie.onrender.com/', 
    methods: 'GET,POST,PUT,DELETE',
  });

  const port = process.env.PORT || 8080;
  await app.listen(port);
  console.log(`Backend corriendo en el puerto ${port}`);
}

bootstrap();
