import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {async} from "rxjs";

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService) {}

    async generateJwt(payload: String){
        return await this.jwtService.signAsync(payload)
    }

}