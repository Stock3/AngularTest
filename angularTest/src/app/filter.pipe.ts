import { Pipe, PipeTransform } from '@angular/core';
import { User } from './shared/user';

@Pipe({
  name: 'filter'
})
export class UserFilterPipe implements PipeTransform {
  transform(users: User[], searchUser: string): User[] {
    if(!users || !searchUser){
      return users;
    }

    return users.filter(user => 
      user.name.toLowerCase().indexOf(searchUser.toLowerCase()) !== -1);
  }
}

