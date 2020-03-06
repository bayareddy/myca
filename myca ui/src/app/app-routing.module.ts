import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './home/header/header.component';
import {FooterComponent} from './home/footer/footer.component';
import {MainComponent} from './home/main/main.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path:'',
children: [{path:'home',component:HomeComponent,
children:[
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'', component:MainComponent}
]},
{ path: "", component: LoginComponent }
]},
{ path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
