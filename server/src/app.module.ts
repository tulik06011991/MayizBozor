import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';







@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://baliq:baliq@cluster0.b3ghd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), // Mongoose ulanish muvaffaqiyatli
    UserModule, AuthModule,
  ],
  controllers: [AppController, ], // Barcha controller'larni qo'shing
  providers: [AppService, ],
})
export class AppModule {}


