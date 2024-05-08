import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configurations } from './configurations';
import { POSTGRESQL } from './database/postgres';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [...configurations],
            isGlobal: true
        }),
        POSTGRESQL
    ],
})

export class ConfigsModule { }