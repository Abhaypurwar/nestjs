import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }));
  app.enableCors();
  app.setGlobalPrefix('api/v1');

  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('Nestjs with postgresql')
    .setDescription('Proof of Concept of nest with postgresql and typeorm as ORM with Migration')
    .setVersion('1.0')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
      'basic'
    )
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(configService.get<string>('PORT'), ()=> console.log('Server is running on port ' + configService.get<string>('PORT')));
}
bootstrap();
