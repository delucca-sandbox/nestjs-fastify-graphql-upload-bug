import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserUpdateArgs } from './user-update.args';
import { UserObject } from './user.object';

@Resolver(() => UserObject)
export class UserResolver {
  @Query(() => UserObject, { name: 'user' })
  protected getUser() {
    return {};
  }

  @Mutation(() => UserObject, { name: 'updateUser' })
  protected updateUser(@Args() args: UserUpdateArgs) {
    console.log(args.data.picture);

    return {};
  }
}
