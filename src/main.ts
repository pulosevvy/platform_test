import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const configSwagger = new DocumentBuilder()
      .setTitle('IPST PLATFORM')
      .setDescription('Документация для API проекта "IPST-PLATFORM"')
      .setVersion('0.1.0')
      .build()

  const documentSwagger = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api/docs', app, documentSwagger);

  app.useGlobalPipes(new ValidationPipe())

  const port = process.env.PORT || 3333
  await app.listen(port);

  Logger.log(
      `API is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
