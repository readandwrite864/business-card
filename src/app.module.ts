import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { HelloResolver } from "./hello.resolver";
import { PrismaModule } from "./prisma/prisma.module";
import { SeedModule } from "./seed/seed.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      graphiql: true,
    }),
    PrismaModule,
    SeedModule,
  ],
  providers: [HelloResolver],
})
export class AppModule {}