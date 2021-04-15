import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UploadGraphQLScalar } from './upload.scalar';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'dist/schema.gql',
    }),
  ],
  providers: [UploadGraphQLScalar, UserResolver],
})
export class AppModule {}
