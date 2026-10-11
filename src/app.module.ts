import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Photo } from './photos/photo.entity';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';



@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'better-sqlite3',
      database: 'database.sqlite',
      entities: [ User, Photo],
      synchronize: true, 
      logging: false,
    }),
    UsersModule, 
    PhotosModule,
  ],
})  
export class AppModule {}
