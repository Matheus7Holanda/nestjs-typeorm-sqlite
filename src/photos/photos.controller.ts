import { Controller, Get, Post, Body, Query, ParseIntPipe } from
'@nestjs/common';
import { PhotosService } from './photos.service';
@Controller(
'photos')
export class PhotosController {
 constructor(private readonly photosService: PhotosService) {}
 @Post()
 async addPhoto(
 @Body('userId') userId: number,
 @Body('url') url: string,
 @Body('likes') likes: number,
 ) {
 return this.photosService.addPhotoToUser(userId, url, likes);
 }
 @Get('popular')
 async getPopular(@Query('minLikes', ParseIntPipe) minLikes: number) {
 return this.photosService.findPopularPhotos(minLikes);
 }
}