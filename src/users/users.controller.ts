import { Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}


    @Post('seed')
    async seed() {
        return this.usersService.createDemo();
    }

    @Get('active')
    async getActive() {
        return this.usersService.findActiveWithPhotos();
    }

    @Get('search')
    async search(@Query('lastName') lastName: string) {
        return this.usersService.findByLastName(lastName);
    }
} 
