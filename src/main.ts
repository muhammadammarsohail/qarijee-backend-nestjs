import { BadRequestException } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseSeeder } from './database/seeder';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    
    // Run database seeder
    const seeder = app.get(DatabaseSeeder);
    await seeder.seed();
    
    await app.listen(5000);
    console.log('Application is running on port 5000');
  } catch (error) {
    console.error('Failed to start application:', error);
    return { error: 'internal server error', code: 500 }
  }
}
bootstrap();
