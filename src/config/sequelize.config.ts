import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const getSequelizeConfig = (configService: ConfigService): SequelizeModuleOptions => ({
  dialect: 'mysql',
  host: configService.get('DB_HOST'),
  port: +configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  autoLoadModels: true,
  synchronize: false,
});
