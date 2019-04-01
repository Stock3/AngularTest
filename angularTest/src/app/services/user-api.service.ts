import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from '../shared/user';
import { Page } from '../shared/page';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const baseURL: string = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }
  
  public users =  this.http.get<User[]>(baseURL + 'users');

  getUsers(page: number, itemsPerPage: number): Observable<Page> {
    var users =  this.http.get<User[]>(baseURL + 'users');
    return this.getPageItems(users, page, itemsPerPage);
  }
  public createUser(user: User) {  
    return this.http.post(baseURL, user);  
  }  
  public getUserById(id: number) {  
    return this.http.get<User>(baseURL + '/' + id);  
  }  
  public updateUser(user: User) {  
    return this.http.put(baseURL + '/' + user.id, user);  
  }  
  deleteUser(id: number){
    const urlParams = new HttpParams().set("id", id.toString());
    return this.http.delete(baseURL, { params: urlParams});
  }

  /*public deleteUsers(user: User | number): Observable<User>{
    const id = typeof user === 'number' ? user : user.id;
    const url = `${baseURL}/${id}`;
    return this.http.delete<User>(url, httpOptions);
  }*/

  /*public deleteUser (id: number) {
    if(confirm("Ви впевнені?")){
      const url = `${baseURL}/${id}`;
      return this.http.delete<User>(url, httpOptions);
    };
  }*/

  private getPageItems(users: Observable<User[]>, page: number, itemsPerPage: number): Observable<Page>{
    return users.pipe(
      map(u => {
        var startIndex = itemsPerPage * (page - 1);
        return new Page(u.length, u.slice(startIndex, startIndex + itemsPerPage));
      })
    );
  }

  /*
  deleteUser = function(id) {
    if(confirm("Ви впевнені?")){
      const url = `${"http://localhost:3000/users"}/${id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => {
        this.fetchData();
      })
    }
  }

  public getUserIds(): Observable<number[] | any> {
    return this.getUsers().pipe(map(users => users.map(user => user.id)));
  }*/
}
