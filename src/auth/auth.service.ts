import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {

    // User 사용하기 위해 inject
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}
}
