import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { User } from './user.entity';



@Injectable()
export class UsersService {
    constructor (
        @InjectRepository(User)
        private userRepository: Repository<User>, //Repositório injetado automaticamente
    ) {}

    // Método para criar um usuário de teste
    async createDemo() {
        const user = this.userRepository.create ({
            firstName: 'Gabriel',
            lastName: 'Silva',
            email: 'gabriel@email.com',
            isActive: true,
        });
        return this.userRepository.save(user);
    }

    // Busca Avançada A: Usuários ativos trazendo fotos
    async findActiveWithPhotos() {
        return this.userRepository.find ({
            where: { isActive: true},
            relations: { photos: true },
        });
    }


    // Busca Avançada B: Filtro de texto parcial
    async findByLastName(partialName: string) {
        return this.userRepository.find({
            where: {
                lastName: Like(`%${partialName}%`),
            },
        });
    }
}
