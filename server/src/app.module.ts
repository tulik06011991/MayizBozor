import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://baliq:baliq@cluster0.b3ghd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), // Mongoose ulanish muvaffaqiyatli
    UserModule,
  ],
})
export class AppModule {}
