import { Module } from '@nestjs/common';
import { MirrorController } from './mirror.controller';

@Module({
  controllers: [MirrorController]
})
export class MirrorModule {}
