import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/models/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'John Doe',
      email: 'johnDoe@test.com',
    },
    {
      username: 'Jane Doe',
      email: 'janeDoe@test.com',
    },
    {
      username: 'Mike Tyson',
      email: 'mikeTyson@test.com',
    },
    {
      username: 'Cristiano Ronaldo',
      email: 'cristianoRonaldo@test.com',
    },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
  }

  fetchUserById(id: number) {
    return { id, username: 'John Doe', email: 'johnDoe@email.com' };
  }
}
