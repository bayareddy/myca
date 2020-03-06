import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RestService } from './service/rest.service';
import { ServiceService } from './login/service.service';
import { MainComponent } from './home/main/main.component';
import { SidenavComponent } from './home/sidenav/sidenav.component';
import { ExpandMenu } from './home/sidenav/ExpandMenu';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidenavComponent,
   ExpandMenu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   HttpClientModule,
   FormsModule
 
   
  ],
  providers: [
  RestService,
  ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
