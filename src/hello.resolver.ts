import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(): string {
    return "hello nestjs + graphql";
  }
}
