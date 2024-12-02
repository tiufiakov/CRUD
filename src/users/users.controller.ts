import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {User} from "./user";

@Controller()
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get()
    getAllUsers(){
        return this.userService.findAll();
    }

    @Post()
    createUser(@Body() user: User){
        return this.userService.createUser(user)
    }

    @Patch()
    editUser(@Body() user: User){
        console.log(user);
        return this.userService.updateUser(user);
    }

    @Delete()
    deleteUser(@Body() userId: number){
        return this.userService.deleteUser(userId);
    }

}