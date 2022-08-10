import { config } from 'dotenv';
import { join } from 'path';
config();

import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [join(__dirname, '..', '**', '*.entity.ts')],
  synchronize: Boolean(process.env.DB_SYNCHRONIZE === 'true'),
  migrations: [
    join(__dirname, '..', '..', 'dist', 'database', 'migrations', '*.js'),
  ],
});
