import { BadRequestException } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(5000);
  } catch {
    return { error: 'internal server error', code: 500 }
  }
}
bootstrap();
