import { Module } from '@nestjs/common';
import { MissionsModule } from './missions/missions.module';

@Module({
  imports: [MissionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
