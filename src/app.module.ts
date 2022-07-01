import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], //registrar outros módulos
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {} //registrar novos controllers aqui
