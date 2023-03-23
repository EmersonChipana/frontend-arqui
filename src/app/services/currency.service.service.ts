import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {

  constructor(private http: HttpClient) { }

  public getExchangeRate(from: string, to: string, amont: number): Observable<any> {
    return this.http.get<any>(environment.url+"/get?from=" + from + "&to=" + to + "&amount=" + amont);
  }

  public getAll(page: Number): Observable<any>{
    return this.http.get<any>(environment.url+"/getall?page="+page+"&size=10");
  }
}
