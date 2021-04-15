import { Field, InputType } from '@nestjs/graphql';
import { FileUpload } from 'graphql-upload';
import { UploadGraphQLScalar } from './upload.scalar';

@InputType()
export class UserInputObject {
  @Field(() => UploadGraphQLScalar)
  public readonly picture?: Promise<FileUpload>;
}
