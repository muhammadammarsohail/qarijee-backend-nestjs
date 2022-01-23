import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'qarijee',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true,   //TODO: set false for production
};