import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SeedService implements OnModuleInit {
  private readonly logger = new Logger(SeedService.name);

  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    const existing = await this.prisma.profile.findFirst();
    if (existing) {
      this.logger.log("seed профиль уже есть. пропускаем сид");
      return;
    }

    await this.prisma.profile.create({
      data: {
        name: "John Doe",
        description:
          "Я не хочу публиковать личные данные на гитхабе поэтому плейсхолдер",
        links: {
          create: [
            { label: "GitHub", url: "https://github.com/readandwrite864" },
          ],
        },
        skills: {
          create: [
            { name: "TypeScript" },
            { name: "NestJS" },
            { name: "GraphQL" },
            { name: "PostgreSQL" },
            { name: "Docker" },
          ],
        },
        experience: {
          create: [
            {
              company: "Компания 1",
              position: "Фулстек разработчик",
              startDate: new Date("2020-09-10"),
              endDate: null,
              achievements: ["Достижение 1", "Достижение 2"],
            },
          ],
        },
        projects: {
          create: [
            {
              name: "business-card",
              description: "этот проект",
              url: null,
            },
          ],
        },
      },
    });

    this.logger.log("seed - данные заполнены");
  }
}
