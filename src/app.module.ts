import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import * as path from 'path';

import { SpecialtyModule } from "./modules/specialties/specialty.module";
import { DatabaseConfig } from "./configs/database/postgres.config";
import { EmployeeModule } from "./modules/employees/employee.module";
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
  imports: [
      ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'uploads')}),
      ConfigModule.forRoot({isGlobal: true}),
      SequelizeModule.forRootAsync({
          useClass: DatabaseConfig
      }),

      SpecialtyModule,
      EmployeeModule,
  ],
    providers: [DatabaseConfig],
})
export class AppModule {}
