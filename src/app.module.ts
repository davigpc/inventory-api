import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@database/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { MovementsModule } from './movements/interface/movements.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    MovementsModule,
  ],
})
export class AppModule {}
