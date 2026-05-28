import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  
  private authApiUrl : string = environment.authUrl;

  constructor(private http : HttpClient){
  }

  login(username : string, password : string){
    return this.http.post(this.authApiUrl, {username, password});
  }

  saveToken(token : string){
    localStorage.setItem("Jwt-Token", token);
  }
  
  getToken() : string | null{
    return localStorage.getItem("Jwt-Token");
  }

  isLoginned() : boolean {
    return !!this.getToken()
  }

  logout(){
    localStorage.removeItem("JWT-token")
  }

}
