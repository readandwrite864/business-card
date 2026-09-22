import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.APP_PORT) || 3000;
  await app.listen(port);
  console.log(`Nest listening on http://localhost:${port}/graphql`);
}

bootstrap();
