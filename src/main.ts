import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { processRequest } from 'graphql-upload';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const adapter = new FastifyAdapter();
  const fastify = adapter.getInstance();

  fastify.addContentTypeParser('multipart', (request, done) => {
    request.isMultipart = true;
    done();
  });

  fastify.addHook('preValidation', async function (request: any, reply) {
    if (!request.raw.isMultipart) {
      return;
    }

    request.body = await processRequest(request.raw, reply.raw);
  });

  const app = await NestFactory.create(AppModule, adapter);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
