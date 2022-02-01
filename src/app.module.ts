import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MirrorModule } from './mirror/mirror.module';

@Module({
    imports: [MirrorModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
