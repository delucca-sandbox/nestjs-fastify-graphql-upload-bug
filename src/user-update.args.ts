import { ArgsType, Field, ID } from '@nestjs/graphql';
import { UserInputObject } from './user.input-object';

@ArgsType()
export class UserUpdateArgs {
  @Field(() => ID)
  public readonly id: string;

  @Field(() => UserInputObject)
  public readonly data: UserInputObject;
}
