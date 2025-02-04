import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import * as cors from "cors"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Configurar CORS
  app.use(
    cors({
      origin: ["http://localhost:5173", "https://api-react-movie.onrender.com/"],
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    }),
  )

  await app.listen(process.env.PORT || 3000)
}
bootstrap()

