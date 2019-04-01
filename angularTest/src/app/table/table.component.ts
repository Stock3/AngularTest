import { Component, OnInit } from '@angular/core';
import 'rxjs';
import { UserApiService } from '../services/user-api.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../shared/user';
import { Observable } from 'rxjs';
const baseURL: string = 'http://localhost:3000/';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public users: User[];
  public page: number;
  public collectionSize: number;
  public itemsPerPage: number = 3;
  public headers = new HttpHeaders({'Content-Type': 'application/json'});
  statusMessage: string;
  searchUser: string;

  constructor(public UserApiService: UserApiService) {
    this.page = 1;
    this.loadPage();
  }

  private loadPage(){
    this.UserApiService.getUsers(this.page, this.itemsPerPage)
      .subscribe(p => {
        this.users = p.rows;
        this.collectionSize = p.totalCount;
      });
  }

  onPageChange(){
    this.loadPage();
  }

  ngOnInit() {
    this.loadPage();
  }

  /*deleteUser(user: User) {
    if(confirm("Ви впевнені?")){
    this.UserApiService.deleteUser(user.id).subscribe(data => {
        this.statusMessage = 'Данные успешно удалены';
    });
  }
}*/

  /*deleteUser(user: User): void{
    if(confirm("Ви впевнені?")){
      this.users = this.users.filter(u => u!==user);
      this.UserApiService.deleteUsers(user).subscribe();
    }
  }*/

  /*deleteUser = function(id) {
    if(confirm("Ви впевнені?")){
      const url = `${"http://localhost:3000/users"}/${id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => {
        this.UserApiService.getUsers();
      })
    }
  }*/

  /*
  id: number;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  fetchData = function(page: number, itemsPerPage: number) {
    this.http.get("http://localhost:3000/users").subscribe( res => {
      this.users = res;
      this.collectionSize = this.users.length;
    });
  }

  deleteUser = function(id) {
    if(confirm("Ви впевнені?")){
      const url = `${"http://localhost:3000/users"}/${id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => {
        this.fetchData();
      })
    }
  }
  */
}
