import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  API_URL: string;

  constructor(
    private http: HttpClient  
  ) { 
		 this.API_URL = environment.baseApiEndpointDev
  }

  getById(id: number): Observable<any> {
		return this.http.get<any>(this.API_URL + `/get-user-data/${id}`);
	}
}
