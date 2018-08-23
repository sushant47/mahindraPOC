
 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 
import {ContactsComponent} from './contacts/contacts.component';
import {LinkComponent} from './link/link.component';
 const routes: Routes = [
   { path: 'Link', component: LinkComponent },
   { path: 'Contacts', component: ContactsComponent} 
 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }
 