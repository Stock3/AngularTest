import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private http: HttpClient) { }
  confirmationString:string = "Додано нового користувача";
  isAdded: boolean = false;
  userObj:object = {};

  addNewUser = function(user) {
    this.userObj = {
      "name": user.name,
      "age": user.age
    }
    this.http.post("http://localhost:3000/users/", this.userObj).subscribe((res:Response) => {
      this.isAdded = true;
    })
  }

  ngOnInit() {
  }

}
