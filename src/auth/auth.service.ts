import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateUser(username, password): any {
    throw new Error('Method not implemented.');
  }
  login(user) {
    throw new Error('Method not implemented.');
  }
}
