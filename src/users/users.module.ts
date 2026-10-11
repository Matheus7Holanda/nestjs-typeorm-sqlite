import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User])], // Define o repositório da entidade User
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule], // Exporta para que o PhotosModule possa associar fotos a usuários

})
export class UsersModule {}