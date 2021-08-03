import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { AddDepartmentComponent } from './add-department/add-department.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    AdminComponent,
    NavbarComponent,
    DepartmentListComponent,
    ApartmentComponent,
    AddDepartmentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
