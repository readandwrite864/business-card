import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Link {
  @Field()
  id!: number;

  @Field()
  label!: string;

  @Field()
  url!: string;
}