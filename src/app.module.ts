import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonaModule } from './maratona/maratona.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),

    TypeOrmModule.forRoot({
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + process.env.TYPEORM_ENTITIES],
      migrations: [__dirname + process.env.TYPEORM_MIGRATIONS],
      cli: {
        migrationsDir: __dirname + process.env.TYPEORM_MIGRATIONS_DIR
      },
      migrationsRun: true,
      synchronize: false,
      logging: 'all',
      logger: 'simple-console'
    }),

    MaratonaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
