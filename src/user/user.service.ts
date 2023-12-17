import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'Fucko',
      password:
        '$2b$10$Z4J9jZ3J6G4J9jZ3J6G4J9jZ3J6G4J9jZ3J6G4J9jZ3J6G4J9jZ3J6G',
    },
  ];

  async findByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}