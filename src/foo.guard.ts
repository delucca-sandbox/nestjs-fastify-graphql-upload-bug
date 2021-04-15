import { CanActivate, ExecutionContext } from '@nestjs/common';

export class FooGuard implements CanActivate {
  public canActivate(_executionContext: ExecutionContext) {
    return true;
  }
}
