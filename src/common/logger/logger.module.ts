import { Module } from '@nestjs/common';
import { Logger } from './services/logger.service';

@Module({
    providers: [Logger],
    exports: [Logger],
})

export class LoggerModule { }