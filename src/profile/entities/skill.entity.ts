import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field()
  id!: number;

  @Field()
  name!: string;
}