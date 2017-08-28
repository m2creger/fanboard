import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'signup',
		component: SignupComponent
	}

];

@NgModule({
	declarations: [
		LoginComponent,
		SignupComponent
	],
    imports: [ RouterModule.forRoot(routes), FormsModule ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}