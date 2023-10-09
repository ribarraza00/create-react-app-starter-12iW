import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Limpiar data (propiedades) que no coincide con la data del DTO.
      forbidNonWhitelisted: true, //Genera un "Bad Request" en caso de vengan propiedades que no coincidan con el DTO.
    }),
  );
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
