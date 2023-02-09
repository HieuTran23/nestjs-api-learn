import { Injectable } from '@nestjs/common/decorators';

@Injectable({})
export class AuthService {
  signup(){
    return {msg: 'Sign up'}
  }

  signin(){
    return {msg: 'Sign in'}
  }
}
