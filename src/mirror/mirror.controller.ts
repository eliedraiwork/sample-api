import { Body, Controller, Get, Query, Req } from '@nestjs/common';

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
}
