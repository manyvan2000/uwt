import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInfo } from './components/personal-info/personal-info.component';
import { LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
