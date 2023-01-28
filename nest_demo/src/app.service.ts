import { Injectable } from '@nestjs/common';
import { TvMazeShowModel } from '@prisma/client';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { PrismaService } from './PrismaService';

@Injectable()
export class AppService {

  constructor(private prsimaService: PrismaService) { }

  async sayHello(): Promise<string> {
    return 'Hello World';
  }

}
