import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router);

  loginObj: any = {
    email: '',
    password: ''
  }
  onLogin() {
    if (this.loginObj.email == 'admin' && this.loginObj.password == '1213') {
      this.router.navigateByUrl('master');
      localStorage.setItem('zack', this.loginObj.email);
    }
  }

}
