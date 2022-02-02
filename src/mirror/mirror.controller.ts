import { Body, Controller, Delete, Get, Post, Query, Req } from '@nestjs/common';

@Controller('mirror')
export class MirrorController {
    @Get()
    mirrorRequest(@Body() body: any, @Query() query: any, @Req() req: any) {
        return {
            body,
            query,
            headers: req.headers,
        };
    }

    @Post()
    postMirrorRequest(@Body() body: any, @Query() query: any, @Req() req: any) {
        return {
            body,
            query,
            headers: req.headers,
        };
    }

    @Delete()
    deleteMirrorRequest(@Body() body: any, @Query() query: any, @Req() req: any) {
        return {
            body,
            query,
            headers: req.headers,
        };
    }
}
