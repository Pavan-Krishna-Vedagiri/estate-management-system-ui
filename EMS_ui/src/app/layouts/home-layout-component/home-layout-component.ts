import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/auth/auth-service';

@Component({
  selector: 'app-home-layout-component',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home-layout-component.html',
  styleUrl: './home-layout-component.css',
})
export class HomeLayoutComponent {

  showResidents: boolean = false

  constructor(private authService : AuthService,
    private router : Router
  ){}

  toggleResidents() {
    this.showResidents = !this.showResidents;
  }
  
  logout(){
    this.authService.logout();
    this.router.navigate(["/login"]);
  }


}
