import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // defines routing. empty means / and if @Controller('test') then http://localhost:3000/test
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('testtt')
  newTest1(): object {
    return this.appService.testing();
  }

  @Post()
  newTest(): object {
    return this.appService.testing();
  }

  @Post("newtest")
  newTest(): object {
    return this.appService.testing();
  }
}
