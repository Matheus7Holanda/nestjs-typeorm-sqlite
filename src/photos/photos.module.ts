import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Photo]),
    UsersModule // Permite usar o repositório de User aqui dentro
  ],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
