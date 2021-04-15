import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserObject {
  @Field(() => ID)
  public readonly id!: string;

  @Field()
  public readonly picture?: string;
}
