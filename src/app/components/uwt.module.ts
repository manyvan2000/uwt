import { NgModule } from "@angular/core";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component'; 
import { SideBar } from "./side-bar/side-bar.component";
import { PersonalInfo } from "./personal-info/personal-info.component";
import { NavBar } from "./nav-bar/nav-bar.component";


@NgModule({
    declarations: [SideBar, NavBar, LoginComponent, PersonalInfo], 
    imports: [BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MaterialModule], 
    exports: [SideBar, NavBar, LoginComponent, PersonalInfo],
    providers: []
})
export class UwtModule {
    
}