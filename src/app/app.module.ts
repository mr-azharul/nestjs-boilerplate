import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './../config/config.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { RolesGuard } from '../core/guards/role.guard';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';

@Module({
    imports: [
        ConfigsModule,
        ThrottlerModule.forRoot([{
            ttl: 60000,
            limit: 10,
        }]),
        AuthModule,
        UsersModule
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useClass: RolesGuard
        },
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard
        }
    ],
})

export class AppModule { }