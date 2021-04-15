import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';

export class FooInterceptor implements NestInterceptor {
  public async intercept(
    executionContext: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const graphqlContext = GqlExecutionContext.create(executionContext);
    const request = graphqlContext.getContext().req;

    request.user = {};

    return next.handle();
  }
}
