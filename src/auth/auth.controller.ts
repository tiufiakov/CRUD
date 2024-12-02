import {Body, Controller, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";

@Controller("/auth")
export class AuthController {

    constructor(private authService: AuthService){}

    @Post()
    authorization(@Body() sms: String){
       return this.authService.generateJwt(sms);
    }

}