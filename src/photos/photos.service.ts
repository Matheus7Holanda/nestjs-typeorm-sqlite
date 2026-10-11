import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan } from 'typeorm';
import { Photo } from './photo.entity';
import { User } from '../users/user.entity';


@Injectable()
export class PhotosService {
    constructor (
        @InjectRepository(Photo)
        private photoRepository: Repository<Photo>,

        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    // Criar foto vinculada a um usuário existente
    async addPhotoToUser(userId: number, url: string, likes: number) {
        const user = await this.userRepository.findOneBy({ id: userId });
        if (!user) throw new NotFoundException('Usuário não encontrado');

        const photo = this.photoRepository.create({ url, likes, user });
        return this.photoRepository.save(photo);
    }

    // Busca Avançada C: Filtro numérico com operadores (> X likes)
    async findPopularPhotos (minLikes: number) {
        return this.photoRepository.find({
            where: {
                likes: MoreThan(minLikes),
            },
            relations: {user: true},
        })
    }
}
