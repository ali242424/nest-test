import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { CountryController, StudentController } from './student.controller';
import { CountryService } from './country.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country, Student } from './entities/student.entity';

@Module({
  controllers: [StudentController,CountryController],
  providers: [StudentService, CountryService],
  imports:[
    TypeOrmModule.forFeature([Country,Student]),
  ]
})
export class StudentModule {}
