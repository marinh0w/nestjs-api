import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //pode adicionar prefixo aqui
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //caminho http
  getHello(): string {
    return this.appService.getHello();
  }
}
