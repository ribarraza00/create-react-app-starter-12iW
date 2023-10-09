import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './clientes/clientes.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HabitacionesModule } from './habitaciones/habitaciones.module';
import { HotelesModule } from './hoteles/hoteles.module';
import { MediosdepagoModule } from './mediosdepago/mediosdepago.module';
import { ReservasModule } from './reservas/reservas.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'hotel',
      autoLoadEntities: true,
    }),
    ClientesModule,
    HabitacionesModule,
    HotelesModule,
    MediosdepagoModule,
    ReservasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
