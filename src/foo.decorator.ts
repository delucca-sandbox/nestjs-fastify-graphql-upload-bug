import { SetMetadata } from '@nestjs/common';

export const FooDecorator = (...foo: string[]) => SetMetadata('foo', foo);
