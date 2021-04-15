import { UseGuards, UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FooDecorator } from './foo.decorator';
import { FooGuard } from './foo.guard';
import { FooInterceptor } from './foo.interceptor';
import { UserUpdateArgs } from './user-update.args';
import { UserObject } from './user.object';

@UseGuards(FooGuard)
@UseInterceptors(FooInterceptor)
@Resolver(() => UserObject)
export class UserResolver {
  @Query(() => UserObject, { name: 'user' })
  protected getUser() {
    return {};
  }

  @FooDecorator('foo')
  @Mutation(() => UserObject, { name: 'updateUser' })
  protected updateUser(@Args() args: UserUpdateArgs) {
    console.log(args.data.picture);

    return {};
  }
}
