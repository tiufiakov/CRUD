import {Delete, Get, Injectable, Patch, Post} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user";
import {Repository} from "typeorm";

function Putch() {

}

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User)
        private userRepository: Repository<User>) {}

    async createUser(user: User){
            const createUser = await this.userRepository.create(user);
            return this.userRepository.save(createUser);
    }

    findAll() {
        return this.userRepository.find();
    }



    async updateUser(user: User){

        const findedUser = await this.userRepository.findOne({where: {id: user.id}});
        Object.assign(findedUser, user);

        return await this.userRepository.save(findedUser);

    }


    deleteUser(id: number){
        return this.userRepository.delete(id);
    }
}