import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Extractjwt, Strategy } from "passport-jwt";

@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: Extractjwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || "my-secret-key",
        })
    }

    async validate(payload: any){
        return { userId: payload.sub, email: payload.email };
    }
}