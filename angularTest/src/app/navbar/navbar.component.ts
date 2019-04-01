import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private modalService: NgbModal) { }

  ngOnInit() {
  }

  openLoginForm() {
    //this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
    const modalRef = this.modalService.open(LoginComponent);
  }
}
