import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from './entities/profile.entity';
import { ProfileService } from './profile.service';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile, { nullable: true })
  profile() {
    return this.profileService.getProfile();
  }
}