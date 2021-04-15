import { Field, InputType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { FileUpload } from 'graphql-upload';
import { UploadGraphQLScalar } from './upload.scalar';

@InputType()
export class UserInputObject {
  @Field(() => UploadGraphQLScalar)
  @Exclude()
  public readonly picture?: Promise<FileUpload>;
}
