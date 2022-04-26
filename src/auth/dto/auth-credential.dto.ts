import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    // 영어랑 숫자만 간으한 유효성 체크
    @Matches(/^[a-zA-Z0-9]*$/, {
        message: '비밀번호는 알파벳과 숫자만 사용'
    })
    password: string;
}