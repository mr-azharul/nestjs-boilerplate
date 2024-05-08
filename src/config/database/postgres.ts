import { join } from 'path';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";

export const POSTGRESQL = TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get("DB.host"),
        port: +configService.get<number>("DB.port"),
        username: configService.get("DB.username"),
        password: configService.get("DB.password"),
        database: configService.get("DB.database"),
        entities: [join(__dirname, '..', '..', 'app', 'modules', '**', 'entities', '*.entity.{ts,js}')],
        synchronize: true,
        logging: false
    }),
});