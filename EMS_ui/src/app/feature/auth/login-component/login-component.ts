import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {


  errorMessage: string = "";
  token: string | null = "";
  loginForm !: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.autoLogin();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  autoLogin() {
    this.token = this.authService.getToken();
    if (this.token) {
      this.router.navigate(['/dashboard'])
    }
  }

  login() {
    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe({
      next: (response: any) => {
        alert(response.token)
        this.authService.saveToken(response.token);
        this.router.navigate(["/dashboard"]);
      },
      error: () => {
        this.errorMessage = "Invalid username or password";
        this.loginForm.reset();
      }
    }
    );
  }

  getToken() {
    this.token = this.authService.getToken()
  }

}
