import { registerAs } from '@nestjs/config';

export enum ConfigKey {
    app = 'APP',
    db = 'DB',
    jwt = 'JWT',
    general = 'GENERAL'
}

export enum Environment {
    Local = 'local',
    Staging = 'staging',
    Testing = 'testing',
    Development = 'development',
    Production = 'production',
}

const APPConfig = registerAs(
    ConfigKey.app, () => ({
        env: Environment[process.env.NODE_ENV as keyof typeof Environment] || 'development',
        port: Number(process.env.APP_PORT),
        appName: process.env.APP_NAME,
        isProduction: process.env.NODE_ENV == "production"
    }),
);

const DBConfig = registerAs(
    ConfigKey.db, () => ({
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    }),
);

const JWTConfig = registerAs(
    ConfigKey.jwt, () => ({
        secret: process.env.JWT_SECRET
    }),
);

const GeneralConfig = registerAs(
    ConfigKey.general, () => ({
        salt_or_round: process.env.SALT_OR_ROUND
    }),
);

export const configurations = [
    APPConfig, 
    DBConfig, 
    JWTConfig,
    GeneralConfig
];