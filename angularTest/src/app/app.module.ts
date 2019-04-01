import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HomeComponent } from './home/home.component';

import { UserApiService } from './services/user-api.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserFilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    TableComponent,
    AddUserComponent,
    UpdateUserComponent,
    HomeComponent,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    UserApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
