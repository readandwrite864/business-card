import { Field, ObjectType } from '@nestjs/graphql';
import { Link } from './link.entity';
import { Skill } from './skill.entity';
import { Experience } from './experience.entity';
import { Project } from './project.entity';

@ObjectType()
export class Profile {
  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;

  @Field(() => [Link])
  links!: Link[];

  @Field(() => [Skill])
  skills!: Skill[];

  @Field(() => [Experience])
  experience!: Experience[];

  @Field(() => [Project])
  projects!: Project[];
}