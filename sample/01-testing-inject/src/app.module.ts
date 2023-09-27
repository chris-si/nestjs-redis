import { RedisModule } from '@chris-si/nestjs-redis';
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    RedisModule.forRoot({
      readyLog: true,
      config: {
        host: 'localhost',
        port: 6380,
        password: 'bitnami'
      }
    }),
    CatsModule
  ]
})
export class AppModule {}
