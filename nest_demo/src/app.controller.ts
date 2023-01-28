import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { TvMazeShowModel } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  sayHello( ): Promise<string> {
    return this.appService.sayHello();
  }


  @Post('add')
  addData(@Req() req){
    console.log(req.body);
    return req.body;
  }
}
