import "reflect-metadata"
import { DataSource } from "typeorm"
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { User } from "../../entity/User";
import { userTable1672664573269 } from "../../migration/1672664573268-userTable";


const env = process.env.NODE_ENV || false;
if (!env) process.exit(100);
config({ path: `bin/.env.${env}` });

const configService = new ConfigService();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: configService.get<string>('POSTGRES_HOST'),
    port: configService.get<number>('POSTGRES_PORT'),
    username: configService.get<string>('POSTGRES_USER'),
    password: configService.get<string>('POSTGRES_PASSWORD'),
    database: configService.get<string>('DATABASE_NAME'),
    logging: ['error', 'migration', 'query', 'warn'],
    logger: 'advanced-console',
    synchronize: false,
    entities: [User],
    migrations: [userTable1672664573269],
    subscribers: [],
})