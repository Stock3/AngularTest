import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {


  id:number;
  data:object = {};
  users = [];
  exist = false;
  userObj:object = {};
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  updateUser(user){
    this.userObj = {
      "name": user.name,
      "age": user.age
    };
    const url = `${"http://localhost:3000/users"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.userObj), {headers: this.headers})
      .toPromise()
      .then(() => {
        this.router.navigate(['/table']);
      })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
    this.http.get("http://localhost:3000/users").subscribe( res => {
      this.users = res;
      for(var i = 0; i < this.users.length; i++){
        if(parseInt(this.users[i].id) === this.id){
          this.exist = true;
          this.data = this.users[i];
          break;
        }
        else{
          this.exist = false;
        }
      }
      }
    )
  }

}
