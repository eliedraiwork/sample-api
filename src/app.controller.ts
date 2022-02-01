import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('error')
    getError(@Query('error_code') errorCode: string): string {
        throw new HttpException('Error in the API', parseInt(errorCode, 10));
    }
}
