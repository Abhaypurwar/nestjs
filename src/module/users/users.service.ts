import { Injectable } from '@nestjs/common';
import { userRepository } from 'src/providers/database/database.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
      return await userRepository.save(createUserDto);  //add User Data in database
  }

  async findAll() {
    return await userRepository.find();  //find all users
  }

  async findById(id: string) {
    return await userRepository.findOne({ where: { id: id }}); // find user by id
  }

}
