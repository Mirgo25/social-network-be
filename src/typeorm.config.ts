import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { getEnvPath } from './env';

config({ path: getEnvPath() });

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.getOrThrow<string>('DB_HOST'),
  port: Number(configService.getOrThrow<string>('DB_PORT')),
  username: configService.getOrThrow<string>('DB_USER'),
  password: configService.getOrThrow<string>('DB_PASSWORD'),
  database: configService.getOrThrow<string>('DB_NAME'),
  entities: [`${__dirname}/../**/*.entity.{ts,js}`],
  dropSchema: false,
  migrationsRun: false,
  migrations: ['src/database/migrations/**/*{.ts,.js}'],
});
