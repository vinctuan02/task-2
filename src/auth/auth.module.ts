import { Module } from '@nestjs/common';
import { JwtModule } from 'src/jwt/jwt.module';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
	imports: [UserModule, JwtModule],
	controllers: [AuthController],
	providers: [AuthService],
})
export class AuthModule {}
