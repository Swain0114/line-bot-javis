import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Line Bot Open API')
    .setDescription('The Line Bot Open API description')
    .setVersion('1.0')
    .addTag('line-bot')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  app.getHttpServer().setTimeout(15 * 60 * 1000);

  await app.listen(port);
}
bootstrap();
