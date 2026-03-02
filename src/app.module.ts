import { Module } from "@nestjs/common";
import { MissionsModule } from "./missions/missions.module";
import { MissionModule } from "./mission/mission.module";

@Module({
  imports: [MissionsModule, MissionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
