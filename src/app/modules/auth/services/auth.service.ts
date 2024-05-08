import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async signIn(email: string, password: string) {
        const user = await this.usersService.findOne(email);
        const passMatch = user ? await bcrypt.compare(password, user.password) : false;
        if (!passMatch) {
            throw new UnauthorizedException();
        }

        return { access_token: await this.jwtService.signAsync({ sub: user.id, username: user.name, roles: user.roles }) }
    }
}