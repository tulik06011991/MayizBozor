import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // Render.com'dan olingan DB URL
      autoLoadEntities: true,
      synchronize: true, // Faol holatda, TypeORM barcha o'zgarishlarni ma'lumotlar bazasiga sinxronlashtiradi (produksiyaga chiqarishda false'ga o'zgartirish tavsiya etiladi)
    }),
    UserModule,
  ],
})
export class AppModule {}

