import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    
    AboutComponent,
         HomeComponent,
         LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterModule,
    // FormControl,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
