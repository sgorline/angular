import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser(): User {
    return {
      name: 'Grizzy',
      permissions: {
        create: true,
        read: true,
        update: true,
        delete: true
      }
    };
  }

}
