import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialDto } from "./dto/auth-credential.dto";
import {User} from "./user.entity";
import * as bcrypt from 'bcryptjs';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(AuthCredentialDto: AuthCredentialDto): Promise<void> {
        const {username, password} = AuthCredentialDto;
        
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const user = this.create({ username, password: hashedPassword});
        
        try{
            await this.save(user);
        } catch (error) {
            console.log('error', error);
        }
        
    }
}