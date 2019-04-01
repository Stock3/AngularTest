import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { TableComponent } from '../table/table.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'table', component: TableComponent },
    { path: 'adduser', component: AddUserComponent },
    { path: 'updateuser/:id', component: UpdateUserComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];