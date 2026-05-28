import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class CommonApiService {
  
  private apiUrl : string = environment.apiBaseUrl;

  constructor(private http : HttpClient){}

  get(url : string, params?: any) : Observable<any>{
    return this.http.get(this.apiUrl + url, { params : this.buildParams(params)});
  }

  post<T>(url : string, body : any, params ?: any){
    return this.http.post(this.apiUrl + url, body, { params : this.buildParams(params)});
  }

  put<T>(url : string, body : any){
    return this.http.put(this.apiUrl + url, body);
  }

  delete<T>(url : string){
    return this.http.delete(this.apiUrl + url);
  }

  buildParams<T>(params?: any) : HttpParams{
    let httpParams = new HttpParams();
    if(params){
      Object.keys(params).forEach(
        key => {
          httpParams = httpParams.set(key, params[key])
        }
      );
    }
    return httpParams;
  }

}
