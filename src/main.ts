import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { ValidationPipe } from "@nestjs/common"
import * as cors from "cors"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe()) // Moved this line up

  // Configurar CORS
  app.use(
    cors({
      origin: ["https://api-react-movie.onrender.com", "http://localhost:5173"],
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    }),
  )

  // Usar variable de entorno PORT para Render
  await app.listen(process.env.PORT || 3000)
}
bootstrap()

