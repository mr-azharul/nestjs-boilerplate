import { IsString, IsNotEmpty } from "class-validator";

export class SignInDto {
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}